import { REDUX_ACTIONS } from '../../constants/constant';
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
function addWebRTC(dispatch, getState) {
    if (room) {
        webrtc.joinRoom(room, function (res, err) {
            dispatch({
                type: REDUX_ACTIONS.ADD_USER,
                name: 'MEE'
            })
            console.log('joined', room, err, res);
        });
    }

    webrtc.connection.on('message', function (data) {
        console.log("Received");
        if (data.type === 'chat') {
            console.log('chat received', data.payload.message);
        }
        dispatch({
            type: REDUX_ACTIONS.MESSAGE_RECEIVED,
            author: 'Other',
            message: data.payload.message
        })
    });
}

function messageAdded(action) {
    webrtc.sendToAll('chat', {message: action.message});
    if (action.type === 'ADD_MESSAGE') {
        console.log("ADD_MESSAGE: " +action.message)
    }
}

export {addWebRTC, messageAdded}