'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _reactRouterDom = require('react-router-dom');

var _reactGoogleButton = require('react-google-button');

var _reactGoogleButton2 = _interopRequireDefault(_reactGoogleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = require('../../../../config.json');

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            auth: _this.props.auth,
            signup: false
        };
        _firebase2.default.initializeApp(config.firebase_config);

        _this.google_siginin = _this.google_siginin.bind(_this);
        _this.setUsername = _this.setUsername.bind(_this);
        _this.setPassword = _this.setPassword.bind(_this);
        _this.signup = _this.signup.bind(_this);

        return _this;
    }

    _createClass(Login, [{
        key: 'setUsername',
        value: function setUsername(username) {

            this.setState({
                username: username
            });
        }
    }, {
        key: 'setPassword',
        value: function setPassword(password) {
            this.setState({
                password: password
            });
        }
    }, {
        key: 'login',
        value: function login() {
            this.props.actions.login({ username: this.state.username, password: this.state.password });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'google_siginin',
        value: function google_siginin(props) {

            console.log("google siginin");
            var provider = new _firebase2.default.auth.GoogleAuthProvider();
            _firebase2.default.auth().signInWithPopup(provider).then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(token);
                //TODO add user to store
                console.log(user);

                props.history.push('/');

                // ...
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(errorMessage);
                // ...
            });
        }
    }, {
        key: 'signup',
        value: function signup() {
            this.setState({
                signup: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.auth.authHeader != undefined) {
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/consultants' });
            } else if (this.state.signup) {
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signup' });
            } else {
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
                                { md: '8' },
                                _react2.default.createElement(
                                    _reactstrap.CardGroup,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Card,
                                        { className: 'p-4' },
                                        _react2.default.createElement(
                                            _reactstrap.CardBody,
                                            null,
                                            _react2.default.createElement(
                                                'h1',
                                                null,
                                                'Login'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'text-muted' },
                                                'Sign In to your account'
                                            ),
                                            _react2.default.createElement(
                                                _reactstrap.InputGroup,
                                                { className: 'mb-3' },
                                                _react2.default.createElement(
                                                    _reactstrap.InputGroupAddon,
                                                    { addonType: 'prepend' },
                                                    _react2.default.createElement('i', { className: 'icon-user' })
                                                ),
                                                _react2.default.createElement(_reactstrap.Input, { onChange: function onChange(e) {
                                                        return _this2.setUsername(e.target.value);
                                                    }, type: 'text',
                                                    placeholder: 'Username' })
                                            ),
                                            _react2.default.createElement(
                                                _reactstrap.InputGroup,
                                                { className: 'mb-4' },
                                                _react2.default.createElement(
                                                    _reactstrap.InputGroupAddon,
                                                    { addonType: 'prepend' },
                                                    _react2.default.createElement('i', { className: 'icon-lock' })
                                                ),
                                                _react2.default.createElement(_reactstrap.Input, { onChange: function onChange(e) {
                                                        return _this2.setPassword(e.target.value);
                                                    }, type: 'password',
                                                    placeholder: 'Password' })
                                            ),
                                            _react2.default.createElement(
                                                _reactstrap.Row,
                                                null,
                                                _react2.default.createElement(
                                                    _reactstrap.Col,
                                                    { xs: '6' },
                                                    _react2.default.createElement(
                                                        _reactstrap.Button,
                                                        { color: 'primary', className: 'px-4', onClick: function onClick() {
                                                                return _this2.login();
                                                            } },
                                                        'Login'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    _reactstrap.Col,
                                                    { xs: '6', className: 'text-right' },
                                                    _react2.default.createElement(
                                                        _reactstrap.Button,
                                                        { color: 'link', className: 'px-0' },
                                                        'Forgot password?'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement('br', null),
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
                                                ),
                                                _react2.default.createElement(
                                                    _reactstrap.Col,
                                                    { xs: '12', sm: '6' },
                                                    _react2.default.createElement(
                                                        _reactstrap.Button,
                                                        { className: 'btn-google-plus', block: true,
                                                            onClick: function onClick() {
                                                                return _this2.google_siginin(_this2.props);
                                                            } },
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            'google'
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactstrap.Card,
                                        { className: 'text-white bg-primary py-5 d-md-down-none', style: { width: 44 + '%' } },
                                        _react2.default.createElement(
                                            _reactstrap.CardBody,
                                            { className: 'text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'h2',
                                                    null,
                                                    'Sign up'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                                ),
                                                _react2.default.createElement(
                                                    _reactstrap.Button,
                                                    { color: 'primary', className: 'mt-3', active: true, onClick: function onClick() {
                                                            return _this2.signup();
                                                        } },
                                                    'Register Now!'
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
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=Login.js.map