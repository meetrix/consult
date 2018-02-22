import React, { Component } from 'react';
import ChatApp from "../../components/ChatApp";
class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        Hello World
        {/*<Video/>*/}
        <ChatApp/>
      </div>
    )
  }
}

export default Dashboard;
