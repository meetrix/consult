'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _HeaderDropdown = require('./HeaderDropdown');

var _HeaderDropdown2 = _interopRequireDefault(_HeaderDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'sidebarToggle',
    value: function sidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-hidden');
    }
  }, {
    key: 'sidebarMinimize',
    value: function sidebarMinimize(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-minimized');
    }
  }, {
    key: 'mobileSidebarToggle',
    value: function mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-mobile-show');
    }
  }, {
    key: 'asideToggle',
    value: function asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('aside-menu-hidden');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'app-header navbar' },
        _react2.default.createElement(
          _reactstrap.NavbarToggler,
          { className: 'd-lg-none', onClick: this.mobileSidebarToggle },
          _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
        ),
        _react2.default.createElement(_reactstrap.NavbarBrand, { href: '#' }),
        _react2.default.createElement(
          _reactstrap.NavbarToggler,
          { className: 'd-md-down-none mr-auto', onClick: this.sidebarToggle },
          _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
        ),
        _react2.default.createElement(
          _reactstrap.Nav,
          { className: 'ml-auto', navbar: true },
          _react2.default.createElement(
            _reactstrap.NavItem,
            { className: 'd-md-down-none' },
            _react2.default.createElement(
              _reactstrap.NavLink,
              { href: '#' },
              _react2.default.createElement('i', { className: 'icon-bell' }),
              _react2.default.createElement(
                _reactstrap.Badge,
                { pill: true, color: 'danger' },
                '5'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.NavItem,
            { className: 'd-md-down-none' },
            _react2.default.createElement(
              _reactstrap.NavLink,
              { href: '#' },
              _react2.default.createElement('i', { className: 'icon-list' })
            )
          ),
          _react2.default.createElement(
            _reactstrap.NavItem,
            { className: 'd-md-down-none' },
            _react2.default.createElement(
              _reactstrap.NavLink,
              { href: '#' },
              _react2.default.createElement('i', { className: 'icon-location-pin' })
            )
          ),
          _react2.default.createElement(_HeaderDropdown2.default, null)
        ),
        _react2.default.createElement(
          _reactstrap.NavbarToggler,
          { className: 'd-md-down-none', onClick: this.asideToggle },
          _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=Header.js.map