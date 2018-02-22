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

    // webrtc.connection.on('message', function (data) {
    //     console.log("Received");
    //     if (data.type === 'chat') {
    //         console.log('chat received', data.payload.message);
    //         //append name and message to textarea using id #messages
    //         // $('#messages').append('<br>' + data.payload.nick + ': <br>' + data.payload.message + '&#10;');
    //     }
    //     dispatch({
    //         type: REDUX_ACTIONS.MESSAGE_RECEIVED,
    //         name: 'MEE',
    //         message: data.payload.message
    //     })
    // });
}

// function messageAdded(action) {
//     // webrtc.config.nick = $('#name').val();
//     webrtc.sendToAll('chat', {message: action.message, nick: 'Me'});
//     if (action.type === 'ADD_MESSAGE') {
//         console.log("ADD_MESSAGE: " +action.message)
//         // appendToList();
//     }
// }

export {addWebRTC}