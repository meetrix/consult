'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by supun on 23/02/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/**
 * Created by supun on 23/02/18.
 */


var UserProfile = function (_Component) {
    _inherits(UserProfile, _Component);

    function UserProfile(props) {
        _classCallCheck(this, UserProfile);

        var _this = _possibleConstructorReturn(this, (UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        _this.state = { collapse: true };
        return _this;
    }

    _createClass(UserProfile, [{
        key: 'toggle',
        value: function toggle() {
            this.setState({ collapse: !this.state.collapse });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'animated fadeIn' },
                _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { xs: '12', sm: '6' },
                        _react2.default.createElement(
                            _reactstrap.Card,
                            null,
                            _react2.default.createElement(
                                _reactstrap.CardHeader,
                                null,
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'ME'
                                )
                            ),
                            _react2.default.createElement(
                                _reactstrap.CardBody,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.FormGroup,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Label,
                                        { htmlFor: 'first-name' },
                                        'First Name'
                                    ),
                                    _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'first-name', placeholder: 'Enter your first name' })
                                ),
                                _react2.default.createElement(
                                    _reactstrap.FormGroup,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Label,
                                        { htmlFor: 'last-name' },
                                        'Last Name'
                                    ),
                                    _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'last-name', placeholder: 'Enter your last name' })
                                ),
                                _react2.default.createElement(
                                    _reactstrap.FormGroup,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Label,
                                        { htmlFor: 'email' },
                                        'Email'
                                    ),
                                    _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'emain', placeholder: 'Enter email address' })
                                ),
                                _react2.default.createElement(
                                    _reactstrap.FormGroup,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Label,
                                        { htmlFor: 'address' },
                                        'Address'
                                    ),
                                    _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'address', placeholder: 'Enter your address' })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { xs: '12', sm: '6' },
                        _react2.default.createElement(
                            _reactstrap.Card,
                            null,
                            _react2.default.createElement(
                                _reactstrap.CardHeader,
                                null,
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Education'
                                )
                            ),
                            _react2.default.createElement(
                                _reactstrap.CardBody,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.FormGroup,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Label,
                                        { htmlFor: 'school' },
                                        'School'
                                    ),
                                    _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'school', placeholder: 'Enter your school' })
                                ),
                                _react2.default.createElement(
                                    _reactstrap.FormGroup,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Label,
                                        { htmlFor: 'district' },
                                        'District'
                                    ),
                                    _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'district', placeholder: 'Enter your district' })
                                ),
                                _react2.default.createElement(
                                    _reactstrap.FormGroup,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Label,
                                        { htmlFor: 'stream' },
                                        'Stream'
                                    ),
                                    _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'stream', placeholder: 'Enter your stream' })
                                ),
                                _react2.default.createElement(
                                    _reactstrap.FormGroup,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Label,
                                        { htmlFor: 'subject' },
                                        'Subject'
                                    ),
                                    _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'subject', placeholder: 'subject' })
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Card,
                            null,
                            _react2.default.createElement(
                                _reactstrap.CardBody,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.FormGroup,
                                    { row: true },
                                    _react2.default.createElement(
                                        _reactstrap.Col,
                                        { md: '3' },
                                        _react2.default.createElement('img', { src: 'img/avatars/6.jpg', className: 'img-avatar', alt: 'admin@meetrix.io' })
                                    ),
                                    _react2.default.createElement(
                                        _reactstrap.Col,
                                        { xs: '12', md: '9' },
                                        _react2.default.createElement(_reactstrap.Input, { type: 'file', id: 'file-input', name: 'file-input' })
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Card,
                            null,
                            _react2.default.createElement(
                                _reactstrap.CardBody,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.FormGroup,
                                    { row: true },
                                    _react2.default.createElement(
                                        _reactstrap.Col,
                                        { md: '3' },
                                        _react2.default.createElement(
                                            _reactstrap.Button,
                                            { type: 'submit', size: 'sm', color: 'primary' },
                                            _react2.default.createElement('i', { className: 'fa fa-dot-circle-o' }),
                                            ' Submit'
                                        ),
                                        _react2.default.createElement(
                                            _reactstrap.Button,
                                            { type: 'reset', size: 'sm', color: 'danger' },
                                            _react2.default.createElement('i', { className: 'fa fa-ban' }),
                                            ' Reset'
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

    return UserProfile;
}(_react.Component);

UserProfile.propTypes = {
    name: _propTypes2.default.string.isRequired,
    email: _propTypes2.default.string.isRequired
};

exports.default = UserProfile;
//# sourceMappingURL=UserProfile.js.map