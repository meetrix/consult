/**
 * Created by supun on 16/02/18.
 */
/**
 * Created by supun on 16/02/18.
 */
/**
 * Created by supun on 08/01/18.
 */
// Core modules
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import ConsultantLiveContainerView from './ConsultantLiveContainerView'

//
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant'

import {actionCreatorFactory} from '../../actions/actionCreator'

function mapStateToProps(state){
    return {
        consultants: [
            {username:"supun",image:"img/avatars/1.jpg"},
            {username:"yasith",image:"img/avatars/2.jpg"},
            {username:"jay",image:"img/avatars/3.jpg"},
            {username:"kasumi",image:"img/avatars/4.jpg"},
            {username:"sachini",image:"img/avatars/5.jpg"},
            {username:"supuni",image:"img/avatars/6.jpg"},

        ],
        numOfConsultantShouldShow:2
    }


}
const mapDispatchToProps = (dispatch) => ({
    //TODO
    actions:{login:bindActionCreators(actionCreatorFactory(KEYS.LOGIN, ATTRS.PAYLOAD),dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConsultantLiveContainerView);/**
 * Created by supun on 12/01/18.
 */
