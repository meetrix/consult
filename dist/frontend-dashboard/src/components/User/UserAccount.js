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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by supun on 24/02/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/**
 * Created by supun on 23/02/18.
 */
/**
 * Created by supun on 23/02/18.
 */


var UserAccount = function (_Component) {
    _inherits(UserAccount, _Component);

    function UserAccount(props) {
        _classCallCheck(this, UserAccount);

        var _this = _possibleConstructorReturn(this, (UserAccount.__proto__ || Object.getPrototypeOf(UserAccount)).call(this, props));

        _this.accoutRecords = _this.accoutRecords.bind(_this);

        return _this;
    }

    _createClass(UserAccount, [{
        key: 'accoutRecords',
        value: function accoutRecords() {
            var records = this.props.records;
            var recordElement = records.map(function (record) {
                return _react2.default.createElement(
                    'tr',
                    { key: record.id },
                    _react2.default.createElement(
                        'td',
                        null,
                        record.id
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        record.date
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        record.account
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            _reactstrap.Badge,
                            { color: 'success' },
                            record.amount
                        )
                    )
                );
            });
            return recordElement;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactstrap.Col,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'animated fadeIn' },
                    _react2.default.createElement(
                        _reactstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Col,
                            { xs: '12', lg: '12' },
                            _react2.default.createElement(
                                _reactstrap.Card,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.CardHeader,
                                    null,
                                    _react2.default.createElement('i', { className: 'fa fa-align-justify' }),
                                    ' Striped Table'
                                ),
                                _react2.default.createElement(
                                    _reactstrap.CardBody,
                                    null,
                                    _react2.default.createElement(
                                        _reactstrap.Table,
                                        { responsive: true, striped: true },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            _react2.default.createElement(
                                                'tr',
                                                null,
                                                _react2.default.createElement(
                                                    'th',
                                                    null,
                                                    'Username'
                                                ),
                                                _react2.default.createElement(
                                                    'th',
                                                    null,
                                                    'Date registered'
                                                ),
                                                _react2.default.createElement(
                                                    'th',
                                                    null,
                                                    'Role'
                                                ),
                                                _react2.default.createElement(
                                                    'th',
                                                    null,
                                                    'Status'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            _react2.default.createElement(
                                                'tr',
                                                null,
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    'Yiorgos Avraamu'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    '2012/01/01'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    'Member'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    _react2.default.createElement(
                                                        _reactstrap.Badge,
                                                        { color: 'success' },
                                                        'Active'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'tr',
                                                null,
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    'Avram Tarasios'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    '2012/02/01'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    'Staff'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    _react2.default.createElement(
                                                        _reactstrap.Badge,
                                                        { color: 'danger' },
                                                        'Banned'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'tr',
                                                null,
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    'Quintin Ed'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    '2012/02/01'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    'Admin'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    _react2.default.createElement(
                                                        _reactstrap.Badge,
                                                        { color: 'secondary' },
                                                        'Inactive'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'tr',
                                                null,
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    'En\xE9as Kwadwo'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    '2012/03/01'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    'Member'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    _react2.default.createElement(
                                                        _reactstrap.Badge,
                                                        { color: 'warning' },
                                                        'Pending'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'tr',
                                                null,
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    'Agapetus Tade\xE1\u0161'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    '2012/01/21'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    'Staff'
                                                ),
                                                _react2.default.createElement(
                                                    'td',
                                                    null,
                                                    _react2.default.createElement(
                                                        _reactstrap.Badge,
                                                        { color: 'success' },
                                                        'Active'
                                                    )
                                                )
                                            ),
                                            this.accoutRecords()
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactstrap.Pagination,
                                        null,
                                        _react2.default.createElement(
                                            _reactstrap.PaginationItem,
                                            { disabled: true },
                                            _react2.default.createElement(
                                                _reactstrap.PaginationLink,
                                                { previous: true, href: '#' },
                                                'Prev'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _reactstrap.PaginationItem,
                                            { active: true },
                                            _react2.default.createElement(
                                                _reactstrap.PaginationLink,
                                                { href: '#' },
                                                '1'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _reactstrap.PaginationItem,
                                            null,
                                            _react2.default.createElement(
                                                _reactstrap.PaginationLink,
                                                { href: '#' },
                                                '2'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _reactstrap.PaginationItem,
                                            null,
                                            _react2.default.createElement(
                                                _reactstrap.PaginationLink,
                                                { href: '#' },
                                                '3'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _reactstrap.PaginationItem,
                                            null,
                                            _react2.default.createElement(
                                                _reactstrap.PaginationLink,
                                                { href: '#' },
                                                '4'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _reactstrap.PaginationItem,
                                            null,
                                            _react2.default.createElement(
                                                _reactstrap.PaginationLink,
                                                { next: true, href: '#' },
                                                'Next'
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

    return UserAccount;
}(_react.Component);

UserAccount.propTypes = {
    records: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        id: _propTypes2.default.string.isRequired,
        date: _propTypes2.default.string.isRequired,
        account: _propTypes2.default.string.isRequired,
        amount: _propTypes2.default.string.isRequired }))
};

exports.default = UserAccount;
//# sourceMappingURL=UserAccount.js.map