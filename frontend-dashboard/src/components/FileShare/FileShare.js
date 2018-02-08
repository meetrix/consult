import React, { Component } from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

class FileShare extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.webrtc = new SimpleWebRTC({
            localVideoEl: 'localVideo',
            remoteVideosEl: 'remoteVideos',
            autoRequestMedia: true,
            // url: 'https://simplewebrtc.com/demo.html?test'
        });
        // called when a peer is created
    this.webrtc.on('createdPeer', function (peer) {
        console.log('createdPeer', peer);
        var remotes = document.getElementById('remotes');
        if (!remotes) return;
        var container = document.createElement('div');
        container.className = 'peerContainer';
        container.id = 'container_' + webrtc.getDomId(peer);

        // show the peer id
        var peername = document.createElement('div');
        peername.className = 'peerName';
        peername.appendChild(document.createTextNode('Peer: ' + peer.id));
        //container.appendChild(peername);

        // show a list of files received / sending
        var filelist = document.createElement('ul');
        filelist.className = 'fileList';
        container.appendChild(filelist);

        // show a file select form
        var fileinput = document.createElement('input');
        fileinput.type = 'file';

        // send a file
        fileinput.addEventListener('change', function() {
            fileinput.disabled = true;

            var file = fileinput.files[0];

            var sender = peer.sendFile(file);

            // create a file item
            var item = document.createElement('li');
            item.className = 'sending';

            // make a label
            var span = document.createElement('span');
            span.className = 'filename';
            span.appendChild(document.createTextNode(file.name));
            item.appendChild(span);

            span = document.createElement('span');
            span.appendChild(document.createTextNode(file.size + ' bytes'));
            item.appendChild(span);

            // create a progress element
            var sendProgress = document.createElement('progress');
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
            var connstate = document.createElement('div');
            connstate.className = 'connectionstate';
            container.appendChild(connstate);
            peer.pc.on('iceConnectionStateChange', function (event) {
                var state = peer.pc.iceConnectionState;
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
        remotes.appendChild(container);

        // receiving an incoming filetransfer
        peer.on('fileTransfer', function (metadata, receiver) {
            console.log('incoming filetransfer', metadata);
            var item = document.createElement('li');
            item.className = 'receiving';

            // make a label
            var span = document.createElement('span');
            span.className = 'filename';
            span.appendChild(document.createTextNode(metadata.name));
            item.appendChild(span);

            span = document.createElement('span');
            span.appendChild(document.createTextNode(metadata.size + ' bytes'));
            item.appendChild(span);

            // create a progress element
            var receiveProgress = document.createElement('progress');
            receiveProgress.max = metadata.size;
            item.appendChild(receiveProgress);

            // hook up receive progress
            receiver.on('progress', function (bytesReceived) {
                receiveProgress.value = bytesReceived;
            });
            // get notified when file is done
            receiver.on('receivedFile', function (file, metadata) {
                console.log('received file', metadata.name, metadata.size);
                var href = document.createElement('a');
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

    // local p2p/ice failure
    this.webrtc.on('iceFailed', function (peer) {
        var connstate = document.querySelector('#container_' + webrtc.getDomId(peer) + ' .connectionstate');
        var fileinput = document.querySelector('#container_' + webrtc.getDomId(peer) + ' input');
        console.log('local fail', connstate);
        if (connstate) {
            connstate.innerText = 'Connection failed.';
            fileinput.disabled = 'disabled';
        }
    });

    // remote p2p/ice failure
    this.webrtc.on('connectivityError', function (peer) {
        var connstate = document.querySelector('#container_' + webrtc.getDomId(peer) + ' .connectionstate');
        var fileinput = document.querySelector('#container_' + webrtc.getDomId(peer) + ' input');
        console.log('remote fail', connstate);
        if (connstate) {
            connstate.innerText = 'Connection failed.';
            fileinput.disabled = 'disabled';
        }
    });

    // this.setRoom(name)
    //     {
    //     document.querySelector('form').remove();
    //     document.getElementById('title').innerText = 'Session: ' + name;
    //     document.getElementById('subTitle').innerText =  'Link to join: ' + location.href;
    //     $('body').addClass('active');
    // }

    this.webrtc.on('leftRoom', function (roomName) {
        console.log(roomName);
    });

    this.webrtc.on('connectionReady', function (sessionId) {
        // ...
        sessionId = sessionId;
        console.log(sessionId);
    })
    }
    componentDidMount(){
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("closing")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            console.log("close function works");
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    }


        render() {
        var divStyle={
            position: "absolute",
            bottom: "15%",
            right: "15%",
            zIndex:"10"
        }

        return (

            <div>
                <div id="classControlContainer" className="" style={divStyle}>
                    <button id="myBtn" className="btn btn-default" style={{backgroundColor:'orange'}}>File Share</button>
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span className="closing">&times;</span>
                            <div id="remotes">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FileShare;
