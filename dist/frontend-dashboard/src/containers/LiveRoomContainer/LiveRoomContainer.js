'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _LiveRoomContainerView = require('./LiveRoomContainerView');

var _LiveRoomContainerView2 = _interopRequireDefault(_LiveRoomContainerView);

var _constant = require('../../constants/constant');

var _actionCreator = require('../../actions/actionCreator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function mapStateToProps(state) {
    return {
        rooms: [{ consultantsImages: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"] }, { consultantsImages: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"] }, { consultantsImages: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"] }, { consultantsImages: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"] }, { consultantsImages: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"] }, { consultantsImages: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"] }, { consultantsImages: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"] }, { consultantsImages: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"] }, { consultantsImages: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"] }, { consultantsImages: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"] }, { consultantsImages: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"] }, { consultantsImages: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"] }],
        numOfRoomsShouldShow: 2
    };
}

//React Component
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LiveRoomContainerView2.default); /**
                                                                                                                  * Created by supun on 12/01/18.
                                                                                                                  */
//# sourceMappingURL=LiveRoomContainer.js.map