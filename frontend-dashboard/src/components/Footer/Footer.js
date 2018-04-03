import React, { Component } from "react";
import { connect } from "react-redux";


class Footer extends Component {
	render() {
		return (
  <footer className="app-footer">
  <span><a href={this.props.customize.footer.organizationLink}>{this.props.customize.footer.applicationName}</a> &copy; {`${this.props.customize.footer.copyrightYear} ${this.props.customize.footer.organization}`}</span>
  <span className="ml-auto">Powered by <a href={this.props.customize.footer.poweredBylink}>{this.props.customize.footer.poweredBy}</a></span>
			</footer>
		);
	}
}

function mapStateToProps(state) {
	return ({
		customize: state.customize,
	});
}

export default connect(mapStateToProps)(Footer);
