// core librery
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// constant
import { actionCreateApiGateWayFactory } from '../../actions/actionCreator';
import { ACTION_KEY as AWS_API_GATEWAY_KEYS, ACTION_ATTR as AWS_API_GATEWAY_ATTRS } from '../../constants/apiGateWayConstant';

// view
import MainView from './MainView';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
const mapDispatchToProps = dispatch => ({
  actions: {
    /* eslint max-len :0 */
    getAuthUserInitData: bindActionCreators(actionCreateApiGateWayFactory(AWS_API_GATEWAY_KEYS.GET_AUTH_USER_INIT_DATA, AWS_API_GATEWAY_ATTRS.PAYLOAD), dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
