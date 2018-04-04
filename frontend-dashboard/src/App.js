/**
 * Created by supun on 15/03/18.
 */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routes from './routes';
import SpinnerComponent from './components/Spinner/SpinnerComponent';


function mapStateToProps(state) {
  return {
    spinner: state.spinner,
  };
}
class App extends Component {
  render() {
    return (
      <div >
        <div className={classnames({ 'overlay-on': this.props.spinner.value === true, 'overlay-off': this.props.spinner.value === false })}>
          <div className={classnames({ 'spinner-middle': this.props.spinner.value === true })}>
            <SpinnerComponent />
          </div>
        </div>
        <div>
          <Routes />
        </div>


      </div>

    );
  }
}
App.propTypes = {
  spinner: PropTypes.shape({
    value: PropTypes.bool.isRequired,
  }),
};
App.defaultProps = {
  spinner: {
    value: false,
  },
};

export default connect(mapStateToProps)(App);
