/**
 * Created by supun on 12/03/18.
 */
import {API, Auth} from 'aws-amplify';

export const api = (method,endPoint,apiRoute,failureAction, successAction,token,payload)=>{
    console.log(method)
  console.log(endPoint)
  console.log(apiRoute)
  console.log(options)
  console.log(failureAction)
  console.log(successAction)
  let options;
    switch (method){
      case 'GET':
         options = {
          headers: {
            Authorization: token,
          },
           queryStringParameters:payload
        }
          return new Promise((resolve, reject) =>{
          API.get(endPoint,apiRoute,options)
            .then(res => {
              console.log(res)
              console.log("schedulte event")
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
              console.log(res)
              console.log("schedulte event post")
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
              console.log(res)
              console.log("schedulte event PUT")
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
              console.log(res)
              console.log("schedulte event DELETE")
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
