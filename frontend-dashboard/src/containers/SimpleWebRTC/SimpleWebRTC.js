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

    //a peer joins a room
    webrtc.joinRoom(room, function (res, err) {
        //REDUX_ACTIONS.ADD_USER
        dispatch(addUser('Me'))
        console.log('joined', room, err, res);
    });

    // a peer video has been added
    webrtc.on('videoAdded', function (video, peer) {
        console.log('video added', peer);
        let remotes = document.getElementById('remotes');
        if (remotes) {
            let container = document.createElement('div');
            container.className = 'videoContainer';
            container.id = 'container_' + webrtc.getDomId(peer);
            container.appendChild(video);

            // suppress contextmenu
            video.oncontextmenu = function () { return false; };

            remotes.appendChild(container);
        }
    });

    // a peer video was removed
    webrtc.on('videoRemoved', function (video, peer) {
        console.log('video removed ', peer);
        let remotes = document.getElementById('remotes');
        let el = document.getElementById(peer ? 'container_' + webrtc.getDomId(peer) : 'localScreenContainer');
        if (remotes && el) {
            remotes.removeChild(el);
        }
    });

    // local p2p/ice failure
    webrtc.on('iceFailed', function (peer) {
        let connstate = document.querySelector('#container_' + webrtc.getDomId(peer) + ' .connectionstate');
        console.log('local fail', connstate);
        if (connstate) {
            connstate.innerText = 'Connection failed.';
            fileinput.disabled = 'disabled';
        }
    });

    // remote p2p/ice failure
    webrtc.on('connectivityError', function (peer) {
        let connstate = document.querySelector('#container_' + webrtc.getDomId(peer) + ' .connectionstate');
        console.log('remote fail', connstate);
        if (connstate) {
            connstate.innerText = 'Connection failed.';
            fileinput.disabled = 'disabled';
        }
    });

    // called when a peer is created
    webrtc.on('createdPeer', function (peer) {
        console.log('createdPeer', peer);
        const remotes_fileS = document.getElementById('remotes_fileS');
        if (!remotes_fileS) return;
        const container = document.createElement('div');
        container.className = 'peerContainer';
        container.id = 'container_' + webrtc.getDomId(peer);

        // show the peer id
        let peername = document.createElement('div');
        peername.className = 'peerName';
        peername.appendChild(document.createTextNode('Peer: ' + peer.id));
        //container.appendChild(peername);

        // show a list of files received / sending
        let filelist = document.createElement('ul');
        filelist.className = 'fileList';
        container.appendChild(filelist);

        // show a file select form
        let fileinput = document.createElement('input');
        fileinput.type = 'file';

        // send a file
        fileinput.addEventListener('change', function() {
            fileinput.disabled = true;
            console.log("Sending files");

            let file = fileinput.files[0];
            let sender = peer.sendFile(file);

            // create a file item
            let item = document.createElement('li');
            item.className = 'sending';

            // make a label
            let span = document.createElement('span');
            span.className = 'filename';
            span.appendChild(document.createTextNode(file.name));
            item.appendChild(span);

            span = document.createElement('span');
            span.appendChild(document.createTextNode(file.size + ' bytes'));
            item.appendChild(span);

            // create a progress element
            let sendProgress = document.createElement('progress');
            sendProgress.max = file.size;
            item.appendChild(sendProgress);

            // hook up send progress
            sender.on('progress', function (bytesSent) {
                sendProgress.value = bytesSent;
            });
            // sending done
            sender.on('sentFile', function () {
                item.appendChild(document.createTextNode('sent'));

                // we allow only one filetransfer at a time
                fileinput.removeAttribute('disabled');
            });
            // receiver has actually received the file
            sender.on('complete', function () {
                // safe to disconnect now
            });
            filelist.appendChild(item);
        }, false);
        fileinput.disabled = 'disabled';
        container.appendChild(fileinput);

        // show the ice connection state
        if (peer && peer.pc) {
            let connstate = document.createElement('div');
            connstate.className = 'connectionstate';
            container.appendChild(connstate);
            peer.pc.on('iceConnectionStateChange', function (event) {
                let state = peer.pc.iceConnectionState;
                console.log('state', state);
                container.className = 'peerContainer p2p' + state.substr(0, 1).toUpperCase()
                    + state.substr(1);
                switch (state) {
                    case 'checking':
                        connstate.innerText = 'Connecting to peer...';
                        break;
                    case 'connected':
                    case 'completed': // on caller side
                        connstate.innerText = 'Connection established.';
                        // enable file sending on connnect
                        fileinput.removeAttribute('disabled');
                        break;
                    case 'disconnected':
                        connstate.innerText = 'Disconnected.';
                        break;
                    case 'failed':
                        // not handled here
                        break;
                    case 'closed':
                        connstate.innerText = 'Connection closed.';
                        console.log(user);

                        // disable file sending
                        fileinput.disabled = 'disabled';
                        // FIXME: remove container, but when?
                        break;
                }
            });
        }
        remotes_fileS.appendChild(container);

        // receiving an incoming filetransfer
        peer.on('fileTransfer', function (metadata, receiver) {
            console.log('incoming filetransfer', metadata);
            let item = document.createElement('li');
            item.className = 'receiving';

            // make a label
            let span = document.createElement('span');
            span.className = 'filename';
            span.appendChild(document.createTextNode(metadata.name));
            item.appendChild(span);

            span = document.createElement('span');
            span.appendChild(document.createTextNode(metadata.size + ' bytes'));
            item.appendChild(span);

            // create a progress element
            let receiveProgress = document.createElement('progress');
            receiveProgress.max = metadata.size;
            item.appendChild(receiveProgress);

            // hook up receive progress
            receiver.on('progress', function (bytesReceived) {
                receiveProgress.value = bytesReceived;
            });
            // get notified when file is done
            receiver.on('receivedFile', function (file, metadata) {
                console.log('received file', metadata.name, metadata.size);
                let href = document.createElement('a');
                href.href = URL.createObjectURL(file);
                href.download = metadata.name;
                href.appendChild(document.createTextNode('download'));
                item.appendChild(href);

                // close the channel
                receiver.channel.close();
            });
            filelist.appendChild(item);
        });
    });

    //wait for messages from other peers
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