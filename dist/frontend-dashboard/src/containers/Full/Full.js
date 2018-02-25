'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactstrap = require('reactstrap');

var _Header = require('../../components/Header/');

var _Header2 = _interopRequireDefault(_Header);

var _Sidebar = require('../../components/Sidebar/');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Breadcrumb = require('../../components/Breadcrumb/');

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _Aside = require('../../components/Aside/');

var _Aside2 = _interopRequireDefault(_Aside);

var _Footer = require('../../components/Footer/');

var _Footer2 = _interopRequireDefault(_Footer);

var _Dashboard = require('../../views/Dashboard/');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _UserProfileContainer = require('../UserContainer/UserProfileContainer');

var _UserProfileContainer2 = _interopRequireDefault(_UserProfileContainer);

var _UserAccountContainer = require('../UserContainer/UserAccountContainer');

var _UserAccountContainer2 = _interopRequireDefault(_UserAccountContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Full = function (_Component) {
  _inherits(Full, _Component);

  function Full() {
    _classCallCheck(this, Full);

    return _possibleConstructorReturn(this, (Full.__proto__ || Object.getPrototypeOf(Full)).apply(this, arguments));
  }

  _createClass(Full, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'app-body' },
          _react2.default.createElement(_Sidebar2.default, this.props),
          _react2.default.createElement(
            'main',
            { className: 'main' },
            _react2.default.createElement(_Breadcrumb2.default, null),
            _react2.default.createElement(
              _reactstrap.Container,
              { fluid: true },
              _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', name: 'Dashboard', component: _Dashboard2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/profile', name: 'Test Component', component: _UserProfileContainer2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/account', name: 'Test Component', component: _UserAccountContainer2.default }),
                _react2.default.createElement(_reactRouterDom.Redirect, { from: '/', to: '/dashboard' })
              )
            )
          ),
          _react2.default.createElement(_Aside2.default, null)
        ),
        _react2.default.createElement(_Footer2.default, {
          applicationName: 'Consult',
          organization: 'Meetrix',
          copyrightYear: '2018',
          poweredByText: 'Meetrix'
        })
      );
    }
  }]);

  return Full;
}(_react.Component);

exports.default = Full;
//# sourceMappingURL=Full.js.map