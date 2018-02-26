import React, { Component } from 'react';
import {Input} from "reactstrap";
import styles from "./Video.scss";
import MaterialIcon from 'react-google-material-icons';

class Video extends Component {

    render() {
        return (
            <div className ="row videoRow">
                <div>
                <video className = "local"
                    id = "localVideo"
                    ref = "local">
                </video>
                    <div className="col-md-offset-6 col-sm-offset-6" id = "callButtonContainer">
                        <button id="videoCall" className="btn btn-sm btn-info rounded text-info">
                            <MaterialIcon icon="pause" id="videoControl"/>
                        </button>
                        <button id="videoRefreshButton" className="btn btn-sm btn-info text-info rounded">
                            <MaterialIcon icon="refresh" id="videoControl"/>
                        </button>
                    </div>
                </div>
                <div className = "remotes"
                     id = "remoteVideos"
                     ref = "remotes" >
                </div>
            </div>

        );
    }
}

export default Video;
