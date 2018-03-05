'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _LiveRoomContainer = require('../../containers/LiveRoomContainer/LiveRoomContainer');

var _LiveRoomContainer2 = _interopRequireDefault(_LiveRoomContainer);

var _ConsultantLiveContainer = require('../../containers/ConsultantLiveContainer/ConsultantLiveContainer');

var _ConsultantLiveContainer2 = _interopRequireDefault(_ConsultantLiveContainer);

var _VideoContainer = require('../../containers/VideoContainer/VideoContainer');

var _VideoContainer2 = _interopRequireDefault(_VideoContainer);

var _MyConsultantsContainer = require('../../containers/MyConsutantsContainer/MyConsultantsContainer');

var _MyConsultantsContainer2 = _interopRequireDefault(_MyConsultantsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'animated fadeIn' },
        _react2.default.createElement(
          _reactstrap.Col,
          null,
          _react2.default.createElement(
            _reactstrap.Row,
            { className: 'dash-board-component-wrapper' },
            _react2.default.createElement(_MyConsultantsContainer2.default, null)
          ),
          _react2.default.createElement(
            _reactstrap.Row,
            { className: 'dash-board-component-wrapper' },
            _react2.default.createElement(_ConsultantLiveContainer2.default, null)
          ),
          _react2.default.createElement(
            _reactstrap.Row,
            { className: 'dash-board-component-wrapper' },
            _react2.default.createElement(_LiveRoomContainer2.default, null)
          ),
          _react2.default.createElement(
            _reactstrap.Row,
            { className: 'dash-board-component-wrapper' },
            _react2.default.createElement(_VideoContainer2.default, null)
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map