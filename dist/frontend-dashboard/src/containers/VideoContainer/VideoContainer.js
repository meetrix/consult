'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _VideoContainerView = require('./VideoContainerView');

var _VideoContainerView2 = _interopRequireDefault(_VideoContainerView);

var _constant = require('../../constants/constant');

var _actionCreator = require('../../actions/actionCreator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function mapStateToProps(state) {
  return {
    videos: [{ url: "img/avatars/1.jpg" }, { url: "img/avatars/2.jpg" }, { url: "img/avatars/3.jpg" }, { url: "img/avatars/4.jpg" }, { url: "img/avatars/5.jpg" }, { url: "img/avatars/6.jpg" }, { url: "img/avatars/1.jpg" }, { url: "img/avatars/2.jpg" }, { url: "img/avatars/3.jpg" }, { url: "img/avatars/4.jpg" }, { url: "img/avatars/5.jpg" }, { url: "img/avatars/6.jpg" }, { url: "img/avatars/1.jpg" }, { url: "img/avatars/2.jpg" }, { url: "img/avatars/3.jpg" }, { url: "img/avatars/4.jpg" }, { url: "img/avatars/5.jpg" }, { url: "img/avatars/6.jpg" }, { url: "img/avatars/1.jpg" }, { url: "img/avatars/2.jpg" }, { url: "img/avatars/3.jpg" }, { url: "img/avatars/4.jpg" }, { url: "img/avatars/5.jpg" }, { url: "img/avatars/6.jpg" }, { url: "img/avatars/1.jpg" }, { url: "img/avatars/2.jpg" }, { url: "img/avatars/3.jpg" }, { url: "img/avatars/4.jpg" }, { url: "img/avatars/5.jpg" }, { url: "img/avatars/6.jpg" }, { url: "img/avatars/1.jpg" }, { url: "img/avatars/2.jpg" }, { url: "img/avatars/3.jpg" }, { url: "img/avatars/4.jpg" }, { url: "img/avatars/5.jpg" }, { url: "img/avatars/6.jpg" }, { url: "img/avatars/1.jpg" }, { url: "img/avatars/2.jpg" }, { url: "img/avatars/3.jpg" }, { url: "img/avatars/4.jpg" }, { url: "img/avatars/5.jpg" }, { url: "img/avatars/6.jpg" }],
    numOfVideoShouldShow: 2
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_VideoContainerView2.default); /**
                                                                                                               * Created by supun on 12/01/18.
                                                                                                               */
/**
 * Created by supun on 16/02/18.
 */
//# sourceMappingURL=VideoContainer.js.map