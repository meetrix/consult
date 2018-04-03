import React, { Component } from "react";
import { TabPane } from "reactstrap";

class MessagePane extends Component {
	render() {
		return (
  <TabPane tabId="2" className="p-3">
  {this.props.messages.map((message, index) =>
					<div className="message" key={message.id}>
						<div className="py-3 pb-5 mr-3 float-left">
    <div className="avatar">
  <img src="img/avatars/7.jpg" className="img-avatar" alt="admin@bootstrapmaster.com" />
  <span className="avatar-status badge-success" />
       </div>
  </div>
      <div>
  <small className="text-muted">Lukasz Holeczek</small>
  <small className="text-muted float-right mt-1">1:52 PM</small>
						</div>
						<div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
      <small className="text-muted">
  {message.text}
						</small>
    </div>)}
				<div>
      <input />
      <button>send</button>
    </div>
			</TabPane>

		);
	}
}

export default MessagePane;
