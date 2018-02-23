'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _ConsultantsView = require('./ConsultantsView');

var _ConsultantsView2 = _interopRequireDefault(_ConsultantsView);

var _constant = require('../../constants/constant');

var _actionCreator = require('../../actions/actionCreator');

var _config = require('../../../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//React Component
/**
 * Created by supun on 08/01/18.
 */
// Core modules
function mapStateToProps(state) {
    return {
        consultants: state.consultants,
        radioButtons: _config.ConsultantSortByRadioButtons,
        dropDownMenus: _config.ConsultantSearchDropDownMenu
    };
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: { getConsultants: (0, _redux.bindActionCreators)((0, _actionCreator.actionCreatorFactory)(_constant.ACTION_KEY.CONSULTS, _constant.ACTION_ATTR.PAYLOAD), dispatch)
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ConsultantsView2.default);
//# sourceMappingURL=ConsultantsContainer.js.map