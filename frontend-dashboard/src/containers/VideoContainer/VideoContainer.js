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
import VideoContainerView from './VideoContainerView'

//
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/apiSagaConstant'

import {actionCreatorFactory} from '../../actions/actionCreator'

function mapStateToProps(state){
    return {
        videos: [
            {url:"img/avatars/1.jpg"},
            {url:"img/avatars/2.jpg"},
            {url:"img/avatars/3.jpg"},
            {url:"img/avatars/4.jpg"},
            {url:"img/avatars/5.jpg"},
            {url:"img/avatars/6.jpg"},
            {url:"img/avatars/1.jpg"},
            {url:"img/avatars/2.jpg"},
            {url:"img/avatars/3.jpg"},
            {url:"img/avatars/4.jpg"},
            {url:"img/avatars/5.jpg"},
            {url:"img/avatars/6.jpg"},
            {url:"img/avatars/1.jpg"},
            {url:"img/avatars/2.jpg"},
            {url:"img/avatars/3.jpg"},
            {url:"img/avatars/4.jpg"},
            {url:"img/avatars/5.jpg"},
            {url:"img/avatars/6.jpg"},
            {url:"img/avatars/1.jpg"},
            {url:"img/avatars/2.jpg"},
            {url:"img/avatars/3.jpg"},
            {url:"img/avatars/4.jpg"},
            {url:"img/avatars/5.jpg"},
            {url:"img/avatars/6.jpg"},
            {url:"img/avatars/1.jpg"},
            {url:"img/avatars/2.jpg"},
            {url:"img/avatars/3.jpg"},
            {url:"img/avatars/4.jpg"},
            {url:"img/avatars/5.jpg"},
            {url:"img/avatars/6.jpg"},
            {url:"img/avatars/1.jpg"},
            {url:"img/avatars/2.jpg"},
            {url:"img/avatars/3.jpg"},
            {url:"img/avatars/4.jpg"},
            {url:"img/avatars/5.jpg"},
            {url:"img/avatars/6.jpg"},
            {url:"img/avatars/1.jpg"},
            {url:"img/avatars/2.jpg"},
            {url:"img/avatars/3.jpg"},
            {url:"img/avatars/4.jpg"},
            {url:"img/avatars/5.jpg"},
            {url:"img/avatars/6.jpg"},

        ],
        numOfVideoShouldShow:2
    }


}
const mapDispatchToProps = (dispatch) => ({
    //TODO
    actions:{login:bindActionCreators(actionCreatorFactory(KEYS.LOGIN, ATTRS.PAYLOAD),dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainerView);/**
 * Created by supun on 12/01/18.
 */
/**
 * Created by supun on 16/02/18.
 */
