/**
 * Created by supun on 14/03/18.
 */
import { API, Auth } from 'aws-amplify';

export const api = (method, failureAction, successAction) => {
  switch (method) {
    case 'GET_AUTH_USER':
      console.log('switch');
      return getAuthUser();
      break;
  }

  function getAuthUser() {
    return new Promise((resolve, reject) => {
      setAuthUser().then((auth) => {
        resolve({
          successAction,
          res: auth,

        });
      }).catch(err =>
        reject({
          failureAction,
          err,
        }));
    });
  }
};

const setAuthUser = async () => await Auth.currentUserInfo();
