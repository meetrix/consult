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
    var token = 'eyJraWQiOiIrUFdkeE9sRzFcL1AwcFQ4UWs2S29FOCtxQUhXQ1BSY3h3QzRJcVBuUGZVYz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIwNjU2NGM1Mi0zY2NhLTQ3NTgtYTcxNy1hZWYzYjg3YzFiMzYiLCJkZXZpY2Vfa2V5IjoidXMtd2VzdC0yX2Q0ZDU3OThlLWE4MzMtNDY3NS1iMmJkLTdiNjFkOWY1N2MzOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1MjE0NTc4MDQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yX2Jqa3lGT2JwdyIsImV4cCI6MTUyMTQ2MTQwNCwiaWF0IjoxNTIxNDU3ODA0LCJqdGkiOiIzNzE0YWYyMi03NjQ5LTRmN2ItODNhMC1kM2JhM2IxZDVhOGYiLCJjbGllbnRfaWQiOiIzNWZwaHR2dXVyYXZkbHBtMHZlbGVvY3Y3OSIsInVzZXJuYW1lIjoidHN1cHVuIn0.MG92TRUPzEiD2iVuTOYa4_2WMm2-Xm5jvDXexn1qTL_QowmYeSVogWvm5E4rlVk3AYeR8obIFO4YHtffynW6HTgeGEgL_I9TF0xa9do4nFkTgUDK_xrNBXYL1-pT1cEfzO_Xl7CLJSQysBgDTF9Mfn851v8_WqSoWayqSpIutDQDi7N1P2ArxDxzp9l_nKIFtRcOIaLo_XOgi97UgqVbwbH9P-kaafKZAr9G1YL7J7RvFMCmfhP1z7aJmH3q-ObJ06A_rFisaf1fyKQmJAzXk39VSOXZxRzK6OrK1a9dyGyfCm8xEpN0IMxBVdGgwau8xAKZ0P9tciXmhasCjUAd9Q';
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
                        callback(null, claims);
                    }).
                    catch(function() {
                        callback('Signature verification failed');
                    });
                });
            });
        }
    });
};
