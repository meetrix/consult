import React, { Component } from 'react';

class WebRTC extends Component {
    constructor(props) {
        super(props);
        this.addVideo = this.addVideo.bind(this);
        this.removeVideo = this.removeVideo.bind(this);
        this.readyToCall = this.readyToCall.bind(this);
    }

    componentDidMount(){
        this.webrtc = new SimpleWebRTC({
            localVideoEl: 'localVideo',
            remoteVideosEl: 'remoteVideos',
            autoRequestMedia: true,
            // url: 'https://simplewebrtc.com/demo.html?test'
        });

        console.log("webrtc component mounted");
        this.webrtc.on('videoAdded', this.addVideo);
        this.webrtc.on('videoRemoved', this.removeVideo);
        this.webrtc.on('readyToCall', this.readyToCall);
    }

    addVideo(video, peer) {
        console.log('video added', peer);
        //  console.log(this.refs.remotes);
        const remotes = ReactDOM.findDOMNode(this.refs.remotes);
        console.log(remotes);
        if (remotes) {
            const container = document.createElement('div');
            container.className = 'videoContainer';
            container.id = 'container_' + this.webrtc.getDomId(peer);
            container.appendChild(video);
            // suppress contextmenu
            video.oncontextmenu = function() {
                return false;
            };
            console.log(container);
            remotes.appendChild(container);
        }
    }

    removeVideo(video, peer) {
        console.log('video removed ', peer);
        const remotes = ReactDOM.findDOMNode(this.refs.remotes);
        const el = document.getElementById(peer ? 'container_' +       this.webrtc.getDomId(peer) : 'localScreenContainer');
        if (remotes && el) {
            remotes.removeChild(el);
        }
    }

    readyToCall() {
        console.log("Ready Call");
        return this.webrtc.joinRoom('PortalChatRoom');
    }

    connect() {
        console.log("connected");
    }

    disconnect() {
        console.log("disconnected");
    }

    render() {
        return (
            < div >
                < div >
                    <video className = "local"
                              id = "localVideo"
                              ref = "local" >
                    </video>
                </div>
                <div className = "remotes"
                     id = "remoteVideos"
                     ref = "remotes" >
                </div>
            </div >
                );
        }
}

export default WebRTC;
