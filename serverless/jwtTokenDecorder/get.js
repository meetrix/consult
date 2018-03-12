/**
 * Created by supun on 11/03/18.
 */
'use strict';

var https = require('https');
var jose = require('node-jose');

var region = 'us-west-2';
var userpool_id = 'us-west-2_bjkyFObpw';
var app_client_id = '35fphtvuuravdlpm0veleocv79';
var keys_url = 'https://cognito-idp.' + region + '.amazonaws.com/' + userpool_id + '/.well-known/jwks.json';


module.exports.get = (event, context, callback) => {
    var token = 'eyJraWQiOiJQN0M3bHVhTk01VWgyMkpyUTdNQzQ2VExFeHRoeTllczVkUUlkb3QxdHNrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlY2YxYzM4MS1kZDhhLTQyOGMtYTdiMC1mYzNmOGY2MmNhNWYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tXC91cy13ZXN0LTJfYmpreUZPYnB3IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImJ1ZGRoaWthamF5NiIsImF1ZCI6IjM1ZnBodHZ1dXJhdmRscG0wdmVsZW9jdjc5IiwiZXZlbnRfaWQiOiJmMzYwYjdjMC0yNDIyLTExZTgtOGRjMy01NTk5MmZmNmI0MDciLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTUyMDY1OTMxNiwicGhvbmVfbnVtYmVyIjoiKzk0NzE1Nzc2MzE2IiwiZXhwIjoxNTIwNzU2NDcyLCJpYXQiOjE1MjA3NTI4NzIsImVtYWlsIjoiYnVkZGhpa2EuYW51c2hrYUBnbWFpbC5jb20ifQ.Xs9I6tRvMIQCuyeQ1RhlFCxxdqOqtnnDXeF4r77t60ZuXpKHc-cO6J5WlWuX42KK6IaZ7jdSTdWe0mRQH4GubXrK0azOy9BVCEEj7i8VOucEvFCG3dkPOTxVHDKISlMVCiROmCDltiymcPZWq2DOLBnkwGiytOYA7cCdBIvuYf8rcNAbD0kU_9PXTZ6aZm88Qix3kafSnYx29KysxTkWnMr-guEHdjGoeLGDk6LgT15EmsMaATzv043Fb_lxcQyCvB5kXv2N-9S6-wt7cAH6zZMx6AHmdYwAO3hlNS-WMeujieNYo91tQjLGt91kAVKrB5EkhyPPB_E5TlVof1F_bg';
    console.log(event)
    var sections = token.split('.');
    // get the kid from the headers prior to verification
    var header = jose.util.base64url.decode(sections[0]);
    header = JSON.parse(header);
    var kid = header.kid;
    // download the public keys
    https.get(keys_url, function(response) {
        if (response.statusCode == 200) {
            response.on('data', function(body) {
                var keys = JSON.parse(body)['keys'];
                // search for the kid in the downloaded public keys
                var key_index = -1;
                for (var i=0; i < keys.length; i++) {
                    if (kid == keys[i].kid) {
                        key_index = i;
                        break;
                    }
                }
                if (key_index == -1) {
                    console.log('Public key not found in jwks.json');
                    callback('Public key not found in jwks.json');
                }
                // construct the public key
                jose.JWK.asKey(keys[key_index]).
                then(function(result) {
                    // verify the signature
                    jose.JWS.createVerify(result).
                    verify(token).
                    then(function(result) {
                        // now we can use the claims


                        var claims = JSON.parse(result.payload);

                        var response = {
                            "statusCode": 200,
                            headers: { 'Content-Type': 'application/json' },
                            "body": claims
                        };
                        console.log(claims)
                        // additionally we can verify the token expiration
                        var current_ts = Math.floor(new Date() / 1000);
                        if (current_ts > claims.exp) {
                            callback('Token is expired');
                        }
                        // and the Audience (use claims.client_id if verifying an access token)
                        if (claims.aud != app_client_id) {
                            callback('Token was not issued for this audience');
                        }
                        callback(null, response);
                    }).
                    catch(function() {
                        callback('Signature verification failed');
                    });
                });
            });
        }
    });
};
