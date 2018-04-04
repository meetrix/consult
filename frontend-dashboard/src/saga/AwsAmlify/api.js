/**
 * Created by supun on 14/03/18.
 */
import { Auth } from 'aws-amplify';

export default 'api';
const setAuthUser = async () => await Auth.currentUserInfo();
const getAuthUser = () => new Promise((resolve, reject) => {
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
const api = (method, failureAction, successAction) => {
  switch (method) {
    case 'GET_AUTH_USER':
      console.log('switch');
      return getAuthUser();
      break;
    default:
      break;
  }
};
