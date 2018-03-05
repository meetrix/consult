'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _LoginContainerView = require('./LoginContainerView');

var _LoginContainerView2 = _interopRequireDefault(_LoginContainerView);

var _constant = require('../../constants/constant');

var _actionCreator = require('../../actions/actionCreator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

//React Component
/**
 * Created by supun on 08/01/18.
 */
// Core modules

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: { login: (0, _redux.bindActionCreators)((0, _actionCreator.actionCreatorFactory)(_constant.ACTION_KEY.LOGIN, _constant.ACTION_ATTR.PAYLOAD), dispatch)
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginContainerView2.default); /**
                                                                                                               * Created by supun on 12/01/18.
                                                                                                               */
//# sourceMappingURL=LoginContainer.js.map