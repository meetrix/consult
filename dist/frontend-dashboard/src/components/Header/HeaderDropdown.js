'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderDropdown = function (_Component) {
  _inherits(HeaderDropdown, _Component);

  function HeaderDropdown(props) {
    _classCallCheck(this, HeaderDropdown);

    var _this = _possibleConstructorReturn(this, (HeaderDropdown.__proto__ || Object.getPrototypeOf(HeaderDropdown)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  _createClass(HeaderDropdown, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: 'dropAccnt',
    value: function dropAccnt() {
      return _react2.default.createElement(
        _reactstrap.Dropdown,
        { nav: true, isOpen: this.state.dropdownOpen, toggle: this.toggle },
        _react2.default.createElement(
          _reactstrap.DropdownToggle,
          { nav: true },
          _react2.default.createElement('img', { src: 'img/avatars/6.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
        ),
        _react2.default.createElement(
          _reactstrap.DropdownMenu,
          { right: true },
          _react2.default.createElement(
            _reactstrap.DropdownItem,
            { header: true, tag: 'div', className: 'text-center' },
            _react2.default.createElement(
              'strong',
              null,
              'Account'
            )
          ),
          _react2.default.createElement(
            _reactstrap.DropdownItem,
            null,
            _react2.default.createElement('i', { className: 'fa fa-bell-o' }),
            ' Updates',
            _react2.default.createElement(
              _reactstrap.Badge,
              { color: 'info' },
              '42'
            )
          ),
          _react2.default.createElement(
            _reactstrap.DropdownItem,
            null,
            _react2.default.createElement('i', { className: 'fa fa-envelope-o' }),
            ' Messages',
            _react2.default.createElement(
              _reactstrap.Badge,
              { color: 'success' },
              '42'
            )
          ),
          _react2.default.createElement(
            _reactstrap.DropdownItem,
            null,
            _react2.default.createElement('i', { className: 'fa fa-tasks' }),
            ' Tasks',
            _react2.default.createElement(
              _reactstrap.Badge,
              { color: 'danger' },
              '42'
            )
          ),
          _react2.default.createElement(
            _reactstrap.DropdownItem,
            null,
            _react2.default.createElement('i', { className: 'fa fa-comments' }),
            ' Comments',
            _react2.default.createElement(
              _reactstrap.Badge,
              { color: 'warning' },
              '42'
            )
          ),
          _react2.default.createElement(
            _reactstrap.DropdownItem,
            { header: true, tag: 'div', className: 'text-center' },
            _react2.default.createElement(
              'strong',
              null,
              'Settings'
            )
          ),
          _react2.default.createElement(
            _reactstrap.DropdownItem,
            null,
            _react2.default.createElement('i', { className: 'fa fa-user' }),
            ' Profile'
          ),
          _react2.default.createElement(
            _reactstrap.DropdownItem,
            null,
            _react2.default.createElement('i', { className: 'fa fa-wrench' }),
            ' Settings'
          ),
          _react2.default.createElement(
            _reactstrap.DropdownItem,
            null,
            _react2.default.createElement('i', { className: 'fa fa-usd' }),
            ' Payments',
            _react2.default.createElement(
              _reactstrap.Badge,
              { color: 'secondary' },
              '42'
            )
          ),
          _react2.default.createElement(
            _reactstrap.DropdownItem,
            null,
            _react2.default.createElement('i', { className: 'fa fa-file' }),
            ' Projects',
            _react2.default.createElement(
              _reactstrap.Badge,
              { color: 'primary' },
              '42'
            )
          ),
          _react2.default.createElement(_reactstrap.DropdownItem, { divider: true }),
          _react2.default.createElement(
            _reactstrap.DropdownItem,
            null,
            _react2.default.createElement('i', { className: 'fa fa-shield' }),
            ' Lock Account'
          ),
          _react2.default.createElement(
            _reactstrap.DropdownItem,
            null,
            _react2.default.createElement('i', { className: 'fa fa-lock' }),
            ' Logout'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var attributes = _objectWithoutProperties(this.props, []);

      return this.dropAccnt();
    }
  }]);

  return HeaderDropdown;
}(_react.Component);

exports.default = HeaderDropdown;
//# sourceMappingURL=HeaderDropdown.js.map