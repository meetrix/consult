'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.setName = _this.setName.bind(_this);
    _this.setUserName = _this.setUserName.bind(_this);
    _this.setEmail = _this.setEmail.bind(_this);
    _this.setPassword = _this.setPassword.bind(_this);
    _this.setReEnterPassword = _this.setReEnterPassword.bind(_this);
    _this.signup = _this.signup.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: 'setName',
    value: function setName(name) {
      this.setState({ name: name });
    }
  }, {
    key: 'setUserName',
    value: function setUserName(username) {
      this.setState({ username: username });
    }
  }, {
    key: 'setEmail',
    value: function setEmail(email) {
      this.setState({ email: email });
    }
  }, {
    key: 'setPassword',
    value: function setPassword(password) {
      this.setState({ password: password });
    }
  }, {
    key: 'setReEnterPassword',
    value: function setReEnterPassword(repassword) {
      this.setState({ repassword: repassword });
    }
  }, {
    key: 'signup',
    value: function signup() {
      if (this.state.password === this.state.repassword) {
        this.props.actions.signup({ name: this.state.name, username: this.state.username, email: this.state.email, password: this.state.password });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'app flex-row align-items-center' },
        _react2.default.createElement(
          _reactstrap.Container,
          null,
          _react2.default.createElement(
            _reactstrap.Row,
            { className: 'justify-content-center' },
            _react2.default.createElement(
              _reactstrap.Col,
              { md: '6' },
              _react2.default.createElement(
                _reactstrap.Card,
                { className: 'mx-4' },
                _react2.default.createElement(
                  _reactstrap.CardBody,
                  { className: 'p-4' },
                  _react2.default.createElement(
                    'h1',
                    null,
                    'Register'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'text-muted' },
                    'Create your account'
                  ),
                  _react2.default.createElement(
                    _reactstrap.InputGroup,
                    { className: 'mb-3' },
                    _react2.default.createElement(
                      _reactstrap.InputGroupAddon,
                      { addonType: 'prepend' },
                      _react2.default.createElement('i', { className: 'icon-user' })
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: 'Name', onChange: function onChange(e) {
                        return _this2.setName(e.target.value);
                      } })
                  ),
                  _react2.default.createElement(
                    _reactstrap.InputGroup,
                    { className: 'mb-3' },
                    _react2.default.createElement(
                      _reactstrap.InputGroupAddon,
                      { addonType: 'prepend' },
                      _react2.default.createElement('i', { className: 'icon-user' })
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: 'Username', onChange: function onChange(e) {
                        return _this2.setUserName(e.target.value);
                      } })
                  ),
                  _react2.default.createElement(
                    _reactstrap.InputGroup,
                    { className: 'mb-3' },
                    _react2.default.createElement(
                      _reactstrap.InputGroupAddon,
                      { addonType: 'prepend' },
                      '@'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: 'Email', onChange: function onChange(e) {
                        return _this2.setEmail(e.target.value);
                      } })
                  ),
                  _react2.default.createElement(
                    _reactstrap.InputGroup,
                    { className: 'mb-3' },
                    _react2.default.createElement(
                      _reactstrap.InputGroupAddon,
                      { addonType: 'prepend' },
                      _react2.default.createElement('i', { className: 'icon-lock' })
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'password', placeholder: 'Password',
                      onChange: function onChange(e) {
                        return _this2.setPassword(e.target.value);
                      } })
                  ),
                  _react2.default.createElement(
                    _reactstrap.InputGroup,
                    { className: 'mb-4' },
                    _react2.default.createElement(
                      _reactstrap.InputGroupAddon,
                      { addonType: 'prepend' },
                      _react2.default.createElement('i', { className: 'icon-lock' })
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'password', placeholder: 'Repeat password',
                      onChange: function onChange(e) {
                        return _this2.setReEnterPassword(e.target.value);
                      } })
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { color: 'success', block: true, onClick: function onClick() {
                        return _this2.signup();
                      } },
                    'Create Account'
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.CardFooter,
                  { className: 'p-4' },
                  _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', sm: '6' },
                      _react2.default.createElement(
                        _reactstrap.Button,
                        { className: 'btn-facebook', block: true },
                        _react2.default.createElement(
                          'span',
                          null,
                          'facebook'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', sm: '6' },
                      _react2.default.createElement(
                        _reactstrap.Button,
                        { className: 'btn-twitter', block: true },
                        _react2.default.createElement(
                          'span',
                          null,
                          'twitter'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Register;
}(_react.Component);

exports.default = Register;
//# sourceMappingURL=Register.js.map