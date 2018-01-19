import {HTTP_CODES, TIMEOUTS} from '../constants/constant';

export default (url, options) =>
    new Promise((resolve, reject) => {
        if (options && options.params && Object.keys(options.params).length) {
            let keys = Object.keys(options.params),
                searchParams = new URLSearchParams();

            // Build searchParams object using query key-value pairs
            for (let i = 0; i < keys.length; i++) {
                if (options.params[keys[i]])
                    searchParams.append(keys[i], options.params[keys[i]]);
            }

            // Extract query string
            url = `${url}?${searchParams.toString()}`;
        }

        options.credentials = "include";

        options.headers = new Headers({
            "Content-Type": "application/json"

        });

        if (typeof options.body === "object") {
            options.body = JSON.stringify(options.body);
        }
        console.log("serever request")
        console.log(url)
        console.log(options)
        fetch(url, options).then((res) => {
            // Wait for response data to resolve before resolving the fetch promise
            res.json().then((data) => {
                console.log("server response");
                res.data = data;

                if (res.status === HTTP_CODES.NOT_AUTHENTICATED) {
                    window.setTimeout(() => {
                        // Note: Redirecting automatically only if auth status is already set as 1:authenticated
                        // if (authService.isAuthenticated()) {
                        //     logger.error("Session is invalid. Reloading the page");
                        //
                        //     authService.authenticate();
                        // }
                    }, TIMEOUTS.AUTH_REDIRECT);
                }

                if (res.status !== HTTP_CODES.SUCCESS) {
                    return reject(res);
                }
                return resolve(res);
            }).catch((err) => {
                err = new Error(`Error while parsing fetched data from server: ${err}`);
                return reject(err);
            });
        }).catch(reject);
    });
