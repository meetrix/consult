'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStars = require('react-stars');

var _reactStars2 = _interopRequireDefault(_reactStars);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by supun on 08/01/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/**
 * Created by supun on 08/01/18.
 */

// Core modules


var Consultant = function (_Component) {
    _inherits(Consultant, _Component);

    function Consultant(props) {
        _classCallCheck(this, Consultant);

        var _this = _possibleConstructorReturn(this, (Consultant.__proto__ || Object.getPrototypeOf(Consultant)).call(this, props));

        _this.ratingChanged = _this.ratingChanged.bind(_this);
        return _this;
    }

    _createClass(Consultant, [{
        key: 'componentWillMount',
        value: function componentWillMount() {

            console.log("Consultant");
            console.log(this.props.actions);
        }
    }, {
        key: 'ratingChanged',
        value: function ratingChanged(newRating) {
            console.log(newRating);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactstrap.Col,
                { xs: '12', sm: this.props.columnWidth, md: this.props.columnWidth },
                _react2.default.createElement(
                    'div',
                    { className: 'animated fadeIn' },
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
                                    _reactstrap.CardHeader,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Badge,
                                        { color: 'info', className: 'float-left' },
                                        '1000 LKR - per session'
                                    ),
                                    _react2.default.createElement(
                                        _reactstrap.Badge,
                                        { pill: true, color: 'danger', className: 'float-right' },
                                        '42'
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactstrap.CardBody,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Row,
                                        null,
                                        _react2.default.createElement(
                                            _reactstrap.Col,
                                            { xs: '12', md: '6' },
                                            _react2.default.createElement('img', { className: 'img-avatar', alt: 'admin@meetrix.io', src: 'img/avatars/1.jpg' })
                                        ),
                                        _react2.default.createElement(
                                            _reactstrap.Col,
                                            { xs: '12', md: '6' },
                                            _react2.default.createElement(
                                                _reactstrap.Row,
                                                null,
                                                _react2.default.createElement(
                                                    _reactstrap.Col,
                                                    null,
                                                    _react2.default.createElement(
                                                        'h6',
                                                        { style: { color: 'blue' } },
                                                        this.props.username
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                _reactstrap.Row,
                                                null,
                                                _react2.default.createElement(
                                                    _reactstrap.Col,
                                                    null,
                                                    _react2.default.createElement(_reactStars2.default, { count: 5, value: 4, onChange: this.ratingChanged, size: 20, color2: '#ffd700' })
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactstrap.Row,
                                        null,
                                        _react2.default.createElement(
                                            _reactstrap.Col,
                                            { xs: '12', md: '6' },
                                            _react2.default.createElement(
                                                _reactstrap.Row,
                                                null,
                                                'Experts Area'
                                            ),
                                            _react2.default.createElement(
                                                _reactstrap.Row,
                                                null,
                                                _react2.default.createElement(
                                                    _reactstrap.Badge,
                                                    { pill: true, color: 'success', className: 'float-left' },
                                                    'chemestry|G.C.E A/L'
                                                ),
                                                _react2.default.createElement(
                                                    _reactstrap.Badge,
                                                    { pill: true, color: 'success', className: 'float-left' },
                                                    'chemestry|G.C.E A/L'
                                                ),
                                                _react2.default.createElement(
                                                    _reactstrap.Badge,
                                                    { pill: true, color: 'success', className: 'float-left' },
                                                    'chemestry|G.C.E A/L'
                                                ),
                                                _react2.default.createElement(
                                                    _reactstrap.Badge,
                                                    { pill: true, color: 'success', className: 'float-left' },
                                                    'chemestry|G.C.E A/L'
                                                ),
                                                _react2.default.createElement(
                                                    _reactstrap.Badge,
                                                    { pill: true, color: 'success', className: 'float-left' },
                                                    'chemestry|G.C.E A/L'
                                                )
                                            ),
                                            _react2.default.createElement(_reactstrap.Row, null),
                                            _react2.default.createElement(_reactstrap.Row, null)
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactstrap.CardFooter,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Button,
                                        { color: 'warning', className: 'float-right' },
                                        _react2.default.createElement('i', { className: 'fa fa-calendar' }),
                                        '\xA0 Time Slot'
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'consultant' },
                    _react2.default.createElement(
                        _reactstrap.Row,
                        { className: 'consultant-price' },
                        _react2.default.createElement(
                            'p',
                            null,
                            '1000/ - per session'
                        ),
                        ' '
                    ),
                    _react2.default.createElement(
                        _reactstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Col,
                            { className: 'consultant-image', xs: '12', md: '6' },
                            _react2.default.createElement('img', { alt: 'Avatar', src: 'img/avatars/1.jpg' })
                        ),
                        _react2.default.createElement(
                            _reactstrap.Col,
                            { xs: '12', md: '6' },
                            _react2.default.createElement(
                                _reactstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.Col,
                                    null,
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        this.props.username
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.Col,
                                    null,
                                    _react2.default.createElement(_reactStars2.default, { count: 5, onChange: this.ratingChanged, size: 24, color2: '#ffd700' })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Col,
                            { xs: '12', md: '6' },
                            _react2.default.createElement(
                                _reactstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.Col,
                                    { xs: '12', md: '6' },
                                    'Experts Area'
                                )
                            ),
                            _react2.default.createElement(
                                _reactstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.Col,
                                    { xs: { size: 'auto', offset: 1 }, md: { size: 'auto', offset: 1 } },
                                    'Technology'
                                )
                            ),
                            _react2.default.createElement(
                                _reactstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.Col,
                                    { xs: { size: 'auto', offset: 2 }, md: { size: 'auto', offset: 2 } },
                                    'C'
                                )
                            ),
                            _react2.default.createElement(
                                _reactstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.Col,
                                    { xs: { size: 'auto', offset: 2 }, md: { size: 'auto', offset: 2 } },
                                    'Java'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Consultant;
}(_react.Component);

Consultant.propTypes = {
    _id: _propTypes2.default.string.isRequired,
    username: _propTypes2.default.string.isRequired,
    actions: _propTypes2.default.object.isRequired,
    columnWidth: _propTypes2.default.number.isRequired

};

exports.default = Consultant;
//# sourceMappingURL=Consultant.js.map