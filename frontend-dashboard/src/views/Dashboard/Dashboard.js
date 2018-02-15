import React, { Component } from 'react';
import ChatApp from "../../components/ChatApp";
import WebRTC from "../../components/WebRTC";
class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        {/*Hello World*/}
        <WebRTC/>
      </div>
    )
  }
}

export default Dashboard;
