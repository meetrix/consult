import React, { Component } from 'react';
import {connect} from 'react-redux';


class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span><a href={this.props.config.footer.organizationLink}>{this.props.config.footer.applicationName}</a> &copy; {this.props.config.footer.copyrightYear+" "+this.props.config.footer.organization}</span>
        <span className="ml-auto">Powered by <a href={this.props.config.footer.poweredBylink}>{this.props.config.footer.poweredBy}</a></span>
      </footer>
    )
  }
}

function mapStateToProps(state){

	return({
		config:state.config
	})
}

export default connect(mapStateToProps)(Footer);
