/**
 * Created by supun on 13/03/18.
 */

import {REDUX_ACTIONS as ACTION_TYPE,ACTION_ATTR as ATTRS }from '../constants/constant';
import Amplify,{API, Auth} from 'aws-amplify';

export const AmplifyMiddleWare = store => next => action => {
  console.log("Middleware triggered:", action);
  switch (action.type){
    case ACTION_TYPE.SET_AUTH_USER:
      console.log("set auth user")


  }

};
