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
import LiveRoomContainerView from './LiveRoomContainerView'

//
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant'

import {actionCreatorFactory} from '../../actions/actionCreator'

function mapStateToProps(state){
    return {
        rooms: [
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]}

            ],
        numOfRoomsShouldShow:2
    }


}
const mapDispatchToProps = (dispatch) => ({
    //TODO
    actions:{login:bindActionCreators(actionCreatorFactory(KEYS.LOGIN, ATTRS.PAYLOAD),dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LiveRoomContainerView);/**
 * Created by supun on 12/01/18.
 */
