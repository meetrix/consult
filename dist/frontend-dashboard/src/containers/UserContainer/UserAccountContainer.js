'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _constant = require('../../constants/constant');

var _actionCreator = require('../../actions/actionCreator');

var _UserAccountView = require('./UserAccountView');

var _UserAccountView2 = _interopRequireDefault(_UserAccountView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
    return {
        account: {
            records: [{ id: "1", date: "Sat Feb 24 2018 16:35:22 GMT+0530 (+0530)", account: "123456", amount: "1000.00" }, { id: "2", date: "Sat Feb 24 2018 16:35:22 GMT+0530 (+0530)", account: "123456", amount: "1000.00" }, { id: "3", date: "Sat Feb 24 2018 16:35:22 GMT+0530 (+0530)", account: "123456", amount: "1000.00" }, { id: "4", date: "Sat Feb 24 2018 16:35:22 GMT+0530 (+0530)", account: "123456", amount: "1000.00" }]

        }
    };
} /**
   * Created by supun on 24/02/18.
   */
/**
 * Created by supun on 23/02/18.
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: { signup: (0, _redux.bindActionCreators)((0, _actionCreator.actionCreatorFactory)(_constant.ACTION_KEY.SIGNUP, _constant.ACTION_ATTR.PAYLOAD), dispatch)
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_UserAccountView2.default);
//# sourceMappingURL=UserAccountContainer.js.map