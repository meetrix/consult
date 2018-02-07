import React, {Component} from 'react';
import WebRTC from "../../../components/WebRTC";

class Chat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const localVideo = 'localVideo';

        return (
            <div><WebRTC/></div>
            // {/*<div className="app flex-row align-items-center">*/}
            //     {/*<Container>*/}
            //         {/*<Row className="justify-content-center">*/}
            //             {/*<Col md="12">*/}
            //                 {/*<Card className="mx-4">*/}
            //                     {/*<CardBody className="p-4">*/}
            //                         {/*<h1>WebRTC Chat</h1>*/}
            //                         {/*<Row>*/}
            //                             {/*<Col md="6">*/}
            //                                 {/*<div>*/}
            //                                     {/*<video id={localVideo}></video>*/}
            //                                 {/*</div>*/}
            //                             {/*</Col>*/}
            //                             {/*<Col md="6">Remote</Col>*/}
            //                         {/*</Row>*/}
            //                     {/*</CardBody>*/}
            //                 {/*</Card>*/}
            //             {/*</Col>*/}
            //         {/*</Row>*/}
            //     {/*</Container>*/}
            // {/*</div>*/}
        );
    }
}

export default Chat;
