/**
 * Created by supun on 24/02/18.
 */
/**
 * Created by supun on 23/02/18.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant'

import {actionCreatorFactory} from '../../actions/actionCreator'

import UserAccountView from './UserAccountView';

function mapStateToProps(state){
    return {
        account: {
            records:[
                {id:"1",date:"Sat Feb 24 2018 16:35:22 GMT+0530 (+0530)",account:"123456",amount:"1000.00"},
                {id:"2",date:"Sat Feb 24 2018 16:35:22 GMT+0530 (+0530)",account:"123456",amount:"1000.00"},
                {id:"3",date:"Sat Feb 24 2018 16:35:22 GMT+0530 (+0530)",account:"123456",amount:"1000.00"},
                {id:"4",date:"Sat Feb 24 2018 16:35:22 GMT+0530 (+0530)",account:"123456",amount:"1000.00"},
            ]

        }
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{signup:bindActionCreators(actionCreatorFactory(KEYS.SIGNUP, ATTRS.PAYLOAD),dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAccountView);
