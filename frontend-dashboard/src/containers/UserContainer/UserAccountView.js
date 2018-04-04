/**
 * Created by supun on 24/02/18.
 */
/**
 * Created by supun on 23/02/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserAccount from '../../components/User/UserAccount';

class UserAccountView extends Component {
  render() {
    return (

      <UserAccount {...this.props.account} />
    );
  }
}
UserAccountView.propTypes = {
  account: PropTypes.shape().isRequired,
};

export default UserAccountView;
