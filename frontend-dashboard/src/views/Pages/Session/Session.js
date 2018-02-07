import React, { Component } from 'react';

class Session extends Component {

    render() {
        return (
            <div>
                <iframe src="https://whiteboard.siplo.lk"
                        height={window.innerHeight}
                        width={window.innerWidth} />
            </div>
        )
    }
}

export default Session;
