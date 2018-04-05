import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {ACTION_KEY as API_GATEWAY_ACTION,ACTION_ATTR as API_GATEWAY_ATTRS  }from '../../constants/apiGateWayConstant'

import {actionCreateApiGateWayFactory} from '../../actions/actionCreator'

import ConsulteeCardView from './ConsulteeCardView';

function mapStateToProps(state){
  return {
    auth:state.auth,
    scheduler:state.scheduler
  }
}

const mapDispatchToProps = (dispatch) => ({
  action: {
    getEventConsultees : bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_ACTION.GET_EVENT_CONSULTEES, API_GATEWAY_ATTRS.PAYLOAD),dispatch),
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ConsulteeCardView);


