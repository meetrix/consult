/**
 * Created by supun on 12/03/18.
 */
import { API } from 'aws-amplify';


const pathParam = (payload, url) => {
  let newUrl;
  const payloadClone = { ...payload };
  const pathTokens = url.split('/:');
  if (url.indexOf('/:') !== 0) {
    pathTokens.shift();
  }

  pathTokens.forEach((token) => {
    const paramKey = token.split('/')[0];
    newUrl = url.replace(`/:${paramKey}`, `${payloadClone[paramKey]}`);

    // Assume that same data will not be sent as both path param and query/body
    delete payloadClone[paramKey];
  });
  return newUrl;
};
const api = (method, endPoint, apiRoute, failureAction, successAction, token, payload) => {
  let options;
  switch (method) {
    case 'GET':
      options = {
        headers: {
          Authorization: token,
        },
        queryStringParameters: payload,
      };
      const url = pathParam(payload, apiRoute);
      return new Promise((resolve, reject) => {
        API.get(endPoint, url, options)
          .then((res) => {
            resolve({
              successAction,
              res,

            });
          })
          .catch(err => reject({
            failureAction,
            err,
          }));
      });
      break;

    case 'POST':
      options = {
        headers: {
          Authorization: token,
        },
        body: payload,
      };
      return new Promise((resolve, reject) => {
        API.post(endPoint, apiRoute, options)
          .then((res) => {
            resolve({
              successAction,
              res,

            });
          })
          .catch(err => reject({
            failureAction,
            err,
          }));
      });
      break;

    case 'PUT':
      options = {
        headers: {
          Authorization: token,
        },
        body: payload,
      };
      return new Promise((resolve, reject) => {
        API.put(endPoint, apiRoute, options)
          .then((res) => {
            resolve({
              successAction,
              res,

            });
          })
          .catch(err => reject({
            failureAction,
            err,
          }));
      });
      break;

    case 'DELETE':
      options = {
        headers: {
          Authorization: token,
        },
        queryStringParameters: payload,
      };
      return new Promise((resolve, reject) => {
        API.del(endPoint, apiRoute, options)
          .then((res) => {
            resolve({
              successAction,
              res,

            });
          })
          .catch(err => reject({
            failureAction,
            err,
          }));
      });
    default:
      break;
  }
};

export default api;
