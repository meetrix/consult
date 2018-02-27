import React, { Component } from 'react';
import "./FileShare.scss";

class FileShare extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //File Share Modal
        // Get the modal
        var modal = document.getElementById('fileShareModal');

        // Get the button that opens the modal
        var btn = document.getElementById("fileShareButton");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("closing")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function () {
            // console.log("Modal displayed");
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            // console.log("close function works");
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            // console.log("Modal Closed");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    render() {
        // let divStyle={
        //     position: "absolute",
        //     bottom: "1.5%",
        //     right: "20%",
        //     zIndex:"10"
        // };

        return (

            <div>
                <div id="classControlContainer" className="">
                    <button id="fileShareButton" className="btn btn-warning rounded">File Share</button>
                    <div id="fileShareModal" className="modal">
                        <div className="modal-content">
                            <span className="closing">&times;</span>
                            <div id="remotes_fileS">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FileShare;
