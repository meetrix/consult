'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _MyConsultantsContainerView = require('./MyConsultantsContainerView');

var _MyConsultantsContainerView2 = _interopRequireDefault(_MyConsultantsContainerView);

var _constant = require('../../constants/constant');

var _actionCreator = require('../../actions/actionCreator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
    return {
        consultants: state.consultants

    };
}

//React Component
/**
 * Created by supun on 08/01/18.
 */
// Core modules

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: { getConsultants: (0, _redux.bindActionCreators)((0, _actionCreator.actionCreatorFactory)(_constant.ACTION_KEY.CONSULTS, _constant.ACTION_ATTR.PAYLOAD), dispatch)
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_MyConsultantsContainerView2.default); /**
                                                                                                                       * Created by supun on 18/02/18.
                                                                                                                       */
//# sourceMappingURL=MyConsultantsContainer.js.map