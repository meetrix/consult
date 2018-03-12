/**
 * Created by supun on 12/03/18.
 */
import {API, Auth} from 'aws-amplify';

export const api = (method,endPoint,apiRoute,options,failureAction, successAction)=>{

    switch (method){
      case 'GET':
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

      case 'POST':
        return new Promise((resolve, reject) =>{
          API.post(endPoint,apiRoute,options)
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
    }
}
