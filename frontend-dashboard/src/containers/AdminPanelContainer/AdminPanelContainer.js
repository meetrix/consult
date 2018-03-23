import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actionCreateApiGateWayFactory} from "../../actions/actionCreator";

import {ACTION_KEY as API_GATEWAY_KEYS,ACTION_ATTR as API_GATEWAY_ATTR} from "../../constants/apiGateWayConstant";

import AdminPanelView from '../../components/AdminPanel/AdminPanel';

function mapStateToProps(state){
  return{
    user : state.auth.user,
    admin: state.admin,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    getConsultants: bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.GET_CONSULTANTS,API_GATEWAY_ATTR.PAYLOAD),dispatch)
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(AdminPanelView)
