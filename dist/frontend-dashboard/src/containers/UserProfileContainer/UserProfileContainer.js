'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _constant = require('../../constants/constant');

var _actionCreator = require('../../actions/actionCreator');

var _UserProfileView = require('./UserProfileView');

var _UserProfileView2 = _interopRequireDefault(_UserProfileView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
    return {
        user: {
            name: "supun",
            email: "supun.12@cse.mrt.ac.lk"
        }
    };
} /**
   * Created by supun on 23/02/18.
   */

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: { signup: (0, _redux.bindActionCreators)((0, _actionCreator.actionCreatorFactory)(_constant.ACTION_KEY.SIGNUP, _constant.ACTION_ATTR.PAYLOAD), dispatch)
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_UserProfileView2.default);
//# sourceMappingURL=UserContainer.js.map