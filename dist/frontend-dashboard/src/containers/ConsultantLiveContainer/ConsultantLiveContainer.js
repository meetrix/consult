'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _ConsultantLiveContainerView = require('./ConsultantLiveContainerView');

var _ConsultantLiveContainerView2 = _interopRequireDefault(_ConsultantLiveContainerView);

var _constant = require('../../constants/constant');

var _actionCreator = require('../../actions/actionCreator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function mapStateToProps(state) {
    return {
        consultants: [{ username: "supun", image: "img/avatars/1.jpg" }, { username: "yasith", image: "img/avatars/2.jpg" }, { username: "jay", image: "img/avatars/3.jpg" }, { username: "kasumi", image: "img/avatars/4.jpg" }, { username: "sachini", image: "img/avatars/5.jpg" }, { username: "supuni", image: "img/avatars/6.jpg" }],
        numOfConsultantShouldShow: 2
    };
}

//React Component
/**
 * Created by supun on 16/02/18.
 */
/**
 * Created by supun on 16/02/18.
 */
/**
 * Created by supun on 08/01/18.
 */
// Core modules

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        //TODO
        actions: { login: (0, _redux.bindActionCreators)((0, _actionCreator.actionCreatorFactory)(_constant.ACTION_KEY.LOGIN, _constant.ACTION_ATTR.PAYLOAD), dispatch)
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ConsultantLiveContainerView2.default); /**
                                                                                                                        * Created by supun on 12/01/18.
                                                                                                                        */
//# sourceMappingURL=ConsultantLiveContainer.js.map