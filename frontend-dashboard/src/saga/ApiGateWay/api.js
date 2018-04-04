/**
 * Created by supun on 12/03/18.
 */
import {API, Auth} from 'aws-amplify';


const pathParam=(payload,url)=>{
  const payloadClone = {...payload},
    pathTokens = url.split('/:');
  if (url.indexOf('/:') !== 0) {
    pathTokens.shift();
  }

  pathTokens.forEach((token) => {
    const paramKey = token.split('/')[0];
    url = url.replace(`/:${paramKey}`, `${payloadClone[paramKey]}`);

    // Assume that same data will not be sent as both path param and query/body
    delete payloadClone[paramKey];
  });
  return url

}
export const api = (method,endPoint,apiRoute,failureAction, successAction,token,payload)=>{
  let options;
    switch (method){
      case 'GET':
         options = {
          headers: {
            Authorization: token,
          },
           queryStringParameters:payload
        }
        const url = pathParam(payload,apiRoute)
          return new Promise((resolve, reject) =>{
          API.get(endPoint,url,options)
            .then(res => {
              
              resolve({
                successAction: successAction,
                res: res

              })
            })
            .catch (err =>reject({
                failureAction: failureAction,
                err: err
              }
            ))
      })
      break;

      case 'POST':
         options = {
          headers: {
            Authorization: token,
          },
          body:payload
        }
        return new Promise((resolve, reject) =>{
          API.post(endPoint,apiRoute,options)
            .then(res => {
              
              resolve({
                successAction: successAction,
                res: res

              })
            })
            .catch (err =>reject({
                failureAction: failureAction,
                err: err
              }
            ))
        })
      break;

      case 'PUT':
         options = {
          headers: {
            Authorization: token,
          },
          body:payload
        }
        return new Promise((resolve, reject) =>{
          API.put(endPoint,apiRoute,options)
            .then(res => {
              
              resolve({
                successAction: successAction,
                res: res

              })
            })
            .catch (err =>reject({
                failureAction: failureAction,
                err: err
              }
            ))
        })
        break;

      case 'DELETE':
         options = {
          headers: {
            Authorization: token,
          },
          queryStringParameters:payload
        }
        return new Promise((resolve, reject) =>{
          API.del(endPoint,apiRoute,options)
            .then(res => {
              
              resolve({
                successAction: successAction,
                res: res

              })
            })
            .catch (err =>reject({
                failureAction: failureAction,
                err: err
              }
            ))
        })
        break;

    }
}
