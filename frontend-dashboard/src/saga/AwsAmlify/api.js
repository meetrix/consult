/**
 * Created by supun on 14/03/18.
 */
import { Auth } from 'aws-amplify';


const setAuthUser = async () => Auth.currentUserInfo();
const getAuthUser = (successAction, failureAction) => new Promise((resolve, reject) => {
  setAuthUser().then((auth) => {
    resolve({
      successAction,
      res: auth,

    });
  }).catch(err =>
    reject(new Error({
      failureAction,
      err,
    })));
});
const api = (method, failureAction, successAction) => {
  switch (method) {
    case 'GET_AUTH_USER':
      return getAuthUser(successAction, failureAction);
    default:
      return ('error');
  }
};
export default api;
