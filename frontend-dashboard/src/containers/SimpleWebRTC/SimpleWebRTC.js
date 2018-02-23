import {REDUX_ACTIONS} from '../../constants/constant';
import {addUser, messageReceived} from "../../constants/webrtc";
const room = 'ChatRoom';
const listCreated = false;
const sessionId = null;
const user = {};
const userCreated = false

const webrtc = new SimpleWebRTC({
        localVideoEl: 'localVideo',
        remoteVideosEl: 'remoteVideos',
        autoRequestMedia: true,
    });

function notificationsFromWebRTC(dispatch, getState) {

    webrtc.joinRoom(room, function (res, err) {
        //REDUX_ACTIONS.ADD_USER
        dispatch(addUser('Me'))
        console.log('joined', room, err, res);
    });

    webrtc.connection.on('message', function (data) {
        //REDUX_ACTIONS.MESSAGE_RECEIVED
        if (data.type === 'chat') {
            console.log('chat received', data.payload.message);
            dispatch(messageReceived(data.payload.message, 'Other'))
        }
    });
}

function notifyWebRTC(action) {
    //REDUX_ACTIONS.ADD_MESSAGE
    webrtc.sendToAll('chat', {message: action.message});
}

export {notificationsFromWebRTC, notifyWebRTC}