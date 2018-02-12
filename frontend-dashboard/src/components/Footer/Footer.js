import React, { Component } from 'react';
import {Branding} from "../../../config";

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span><a href={Branding.footer.organizationLink}>{Branding.footer.applicationName}</a> &copy; {Branding.footer.copyrightYear+" "+Branding.footer.organization}</span>
        <span className="ml-auto">Powered by <a href={Branding.footer.poweredBylink}>{Branding.footer.poweredBy}</a></span>
      </footer>
    )
  }
}

export default Footer;
