'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _LoginContainer = require('./containers/Login/LoginContainer');

var _LoginContainer2 = _interopRequireDefault(_LoginContainer);

var _SignUpContainer = require('./containers/SignUp/SignUpContainer');

var _SignUpContainer2 = _interopRequireDefault(_SignUpContainer);

var _Consultants = require('./views/Pages/Consultant/Consultants');

var _Consultants2 = _interopRequireDefault(_Consultants);

var _Test = require('./views/Pages/Test/Test');

var _Test2 = _interopRequireDefault(_Test);

var _LifycycleTest = require('./views/Pages/Test/LifycycleTest');

var _LifycycleTest2 = _interopRequireDefault(_LifycycleTest);

var _AuthenticatedRoute = require('./components/Route/AuthenticatedRoute');

var _AuthenticatedRoute2 = _interopRequireDefault(_AuthenticatedRoute);

var _UnauthenticatedRoute = require('./components/Route/UnauthenticatedRoute');

var _UnauthenticatedRoute2 = _interopRequireDefault(_UnauthenticatedRoute);

var _Full = require('./containers/Full/');

var _Full2 = _interopRequireDefault(_Full);

var _Calendar = require('./components/Calendar/Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _BaseBox = require('./components/BaseBox/BaseBox');

var _BaseBox2 = _interopRequireDefault(_BaseBox);

var _ConsultantLive = require('./components/Consultants/ConsultantLive');

var _ConsultantLive2 = _interopRequireDefault(_ConsultantLive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Containers

//TestComponet
exports.default = function () {
  return _react2.default.createElement(
    _reactRouterDom.HashRouter,
    null,
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', name: 'Login Page', component: _LoginContainer2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/signup', name: 'Register Page', component: _SignUpContainer2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/consultants', name: 'Consultants Page', component: _Consultants2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/test', name: 'Test Component', component: _Test2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/calendar', name: 'Calendar Component', component: _Calendar2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/basebox', name: 'BaseBox Component', component: _BaseBox2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/consultantlive', name: 'ConsultantLive Component', component: _ConsultantLive2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', name: 'Home', component: _Full2.default })
    )
  );
};
//Views
//# sourceMappingURL=routes.js.map