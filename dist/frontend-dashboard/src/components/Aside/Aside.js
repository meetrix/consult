'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Aside = function (_Component) {
  _inherits(Aside, _Component);

  function Aside(props) {
    _classCallCheck(this, Aside);

    var _this = _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  _createClass(Aside, [{
    key: 'toggle',
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'aside',
        { className: 'aside-menu' },
        _react2.default.createElement(
          _reactstrap.Nav,
          { tabs: true },
          _react2.default.createElement(
            _reactstrap.NavItem,
            null,
            _react2.default.createElement(
              _reactstrap.NavLink,
              { className: (0, _classnames2.default)({ active: this.state.activeTab === '1' }),
                onClick: function onClick() {
                  _this2.toggle('1');
                } },
              _react2.default.createElement('i', { className: 'icon-list' })
            )
          ),
          _react2.default.createElement(
            _reactstrap.NavItem,
            null,
            _react2.default.createElement(
              _reactstrap.NavLink,
              { className: (0, _classnames2.default)({ active: this.state.activeTab === '2' }),
                onClick: function onClick() {
                  _this2.toggle('2');
                } },
              _react2.default.createElement('i', { className: 'icon-speech' })
            )
          ),
          _react2.default.createElement(
            _reactstrap.NavItem,
            null,
            _react2.default.createElement(
              _reactstrap.NavLink,
              { className: (0, _classnames2.default)({ active: this.state.activeTab === '3' }),
                onClick: function onClick() {
                  _this2.toggle('3');
                } },
              _react2.default.createElement('i', { className: 'icon-settings' })
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.TabContent,
          { activeTab: this.state.activeTab },
          _react2.default.createElement(
            _reactstrap.TabPane,
            { tabId: '1' },
            _react2.default.createElement(
              'div',
              { className: 'callout m-0 py-2 text-muted text-center bg-light text-uppercase' },
              _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Today'
                )
              )
            ),
            _react2.default.createElement('hr', { className: 'transparent mx-3 my-0' }),
            _react2.default.createElement(
              'div',
              { className: 'callout callout-warning m-0 py-3' },
              _react2.default.createElement(
                'div',
                { className: 'avatar float-right' },
                _react2.default.createElement('img', { src: 'img/avatars/7.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
              ),
              _react2.default.createElement(
                'div',
                null,
                'Meeting with ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Lucas'
                )
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted mr-3' },
                _react2.default.createElement('i', { className: 'icon-calendar' }),
                '\xA0 1 - 3pm'
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted' },
                _react2.default.createElement('i', { className: 'icon-location-pin' }),
                '\xA0 Palo Alto, CA'
              )
            ),
            _react2.default.createElement('hr', { className: 'mx-3 my-0' }),
            _react2.default.createElement(
              'div',
              { className: 'callout callout-info m-0 py-3' },
              _react2.default.createElement(
                'div',
                { className: 'avatar float-right' },
                _react2.default.createElement('img', { src: 'img/avatars/4.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
              ),
              _react2.default.createElement(
                'div',
                null,
                'Skype with ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Megan'
                )
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted mr-3' },
                _react2.default.createElement('i', { className: 'icon-calendar' }),
                '\xA0 4 - 5pm'
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted' },
                _react2.default.createElement('i', { className: 'icon-social-skype' }),
                '\xA0 On-line'
              )
            ),
            _react2.default.createElement('hr', { className: 'transparent mx-3 my-0' }),
            _react2.default.createElement(
              'div',
              { className: 'callout m-0 py-2 text-muted text-center bg-light text-uppercase' },
              _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Tomorrow'
                )
              )
            ),
            _react2.default.createElement('hr', { className: 'transparent mx-3 my-0' }),
            _react2.default.createElement(
              'div',
              { className: 'callout callout-danger m-0 py-3' },
              _react2.default.createElement(
                'div',
                null,
                'New UI Project - ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'deadline'
                )
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted mr-3' },
                _react2.default.createElement('i', { className: 'icon-calendar' }),
                '\xA0 10 - 11pm'
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted' },
                _react2.default.createElement('i', { className: 'icon-home' }),
                '\xA0 creativeLabs HQ'
              ),
              _react2.default.createElement(
                'div',
                { className: 'avatars-stack mt-2' },
                _react2.default.createElement(
                  'div',
                  { className: 'avatar avatar-xs' },
                  _react2.default.createElement('img', { src: 'img/avatars/2.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'avatar avatar-xs' },
                  _react2.default.createElement('img', { src: 'img/avatars/3.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'avatar avatar-xs' },
                  _react2.default.createElement('img', { src: 'img/avatars/4.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'avatar avatar-xs' },
                  _react2.default.createElement('img', { src: 'img/avatars/5.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'avatar avatar-xs' },
                  _react2.default.createElement('img', { src: 'img/avatars/6.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
                )
              )
            ),
            _react2.default.createElement('hr', { className: 'mx-3 my-0' }),
            _react2.default.createElement(
              'div',
              { className: 'callout callout-success m-0 py-3' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  '#10 Startups.Garden'
                ),
                ' Meetup'
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted mr-3' },
                _react2.default.createElement('i', { className: 'icon-calendar' }),
                '\xA0 1 - 3pm'
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted' },
                _react2.default.createElement('i', { className: 'icon-location-pin' }),
                '\xA0 Palo Alto, CA'
              )
            ),
            _react2.default.createElement('hr', { className: 'mx-3 my-0' }),
            _react2.default.createElement(
              'div',
              { className: 'callout callout-primary m-0 py-3' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Team meeting'
                )
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted mr-3' },
                _react2.default.createElement('i', { className: 'icon-calendar' }),
                '\xA0 4 - 6pm'
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted' },
                _react2.default.createElement('i', { className: 'icon-home' }),
                '\xA0 creativeLabs HQ'
              ),
              _react2.default.createElement(
                'div',
                { className: 'avatars-stack mt-2' },
                _react2.default.createElement(
                  'div',
                  { className: 'avatar avatar-xs' },
                  _react2.default.createElement('img', { src: 'img/avatars/2.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'avatar avatar-xs' },
                  _react2.default.createElement('img', { src: 'img/avatars/3.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'avatar avatar-xs' },
                  _react2.default.createElement('img', { src: 'img/avatars/4.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'avatar avatar-xs' },
                  _react2.default.createElement('img', { src: 'img/avatars/5.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'avatar avatar-xs' },
                  _react2.default.createElement('img', { src: 'img/avatars/6.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'avatar avatar-xs' },
                  _react2.default.createElement('img', { src: 'img/avatars/7.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'avatar avatar-xs' },
                  _react2.default.createElement('img', { src: 'img/avatars/8.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
                )
              )
            ),
            _react2.default.createElement('hr', { className: 'mx-3 my-0' })
          ),
          _react2.default.createElement(
            _reactstrap.TabPane,
            { tabId: '2', className: 'p-3' },
            _react2.default.createElement(
              'div',
              { className: 'message' },
              _react2.default.createElement(
                'div',
                { className: 'py-3 pb-5 mr-3 float-left' },
                _react2.default.createElement(
                  'div',
                  { className: 'avatar' },
                  _react2.default.createElement('img', { src: 'img/avatars/7.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                  _react2.default.createElement('span', { className: 'avatar-status badge-success' })
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'small',
                  { className: 'text-muted' },
                  'Lukasz Holeczek'
                ),
                _react2.default.createElement(
                  'small',
                  { className: 'text-muted float-right mt-1' },
                  '1:52 PM'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'text-truncate font-weight-bold' },
                'Lorem ipsum dolor sit amet'
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted' },
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...'
              )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'div',
              { className: 'message' },
              _react2.default.createElement(
                'div',
                { className: 'py-3 pb-5 mr-3 float-left' },
                _react2.default.createElement(
                  'div',
                  { className: 'avatar' },
                  _react2.default.createElement('img', { src: 'img/avatars/7.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                  _react2.default.createElement('span', { className: 'avatar-status badge-success' })
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'small',
                  { className: 'text-muted' },
                  'Lukasz Holeczek'
                ),
                _react2.default.createElement(
                  'small',
                  { className: 'text-muted float-right mt-1' },
                  '1:52 PM'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'text-truncate font-weight-bold' },
                'Lorem ipsum dolor sit amet'
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted' },
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...'
              )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'div',
              { className: 'message' },
              _react2.default.createElement(
                'div',
                { className: 'py-3 pb-5 mr-3 float-left' },
                _react2.default.createElement(
                  'div',
                  { className: 'avatar' },
                  _react2.default.createElement('img', { src: 'img/avatars/7.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                  _react2.default.createElement('span', { className: 'avatar-status badge-success' })
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'small',
                  { className: 'text-muted' },
                  'Lukasz Holeczek'
                ),
                _react2.default.createElement(
                  'small',
                  { className: 'text-muted float-right mt-1' },
                  '1:52 PM'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'text-truncate font-weight-bold' },
                'Lorem ipsum dolor sit amet'
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted' },
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...'
              )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'div',
              { className: 'message' },
              _react2.default.createElement(
                'div',
                { className: 'py-3 pb-5 mr-3 float-left' },
                _react2.default.createElement(
                  'div',
                  { className: 'avatar' },
                  _react2.default.createElement('img', { src: 'img/avatars/7.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                  _react2.default.createElement('span', { className: 'avatar-status badge-success' })
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'small',
                  { className: 'text-muted' },
                  'Lukasz Holeczek'
                ),
                _react2.default.createElement(
                  'small',
                  { className: 'text-muted float-right mt-1' },
                  '1:52 PM'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'text-truncate font-weight-bold' },
                'Lorem ipsum dolor sit amet'
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted' },
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...'
              )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'div',
              { className: 'message' },
              _react2.default.createElement(
                'div',
                { className: 'py-3 pb-5 mr-3 float-left' },
                _react2.default.createElement(
                  'div',
                  { className: 'avatar' },
                  _react2.default.createElement('img', { src: 'img/avatars/7.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                  _react2.default.createElement('span', { className: 'avatar-status badge-success' })
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'small',
                  { className: 'text-muted' },
                  'Lukasz Holeczek'
                ),
                _react2.default.createElement(
                  'small',
                  { className: 'text-muted float-right mt-1' },
                  '1:52 PM'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'text-truncate font-weight-bold' },
                'Lorem ipsum dolor sit amet'
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted' },
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.TabPane,
            { tabId: '3', className: 'p-3' },
            _react2.default.createElement(
              'h6',
              null,
              'Settings'
            ),
            _react2.default.createElement(
              'div',
              { className: 'aside-options' },
              _react2.default.createElement(
                'div',
                { className: 'clearfix mt-4' },
                _react2.default.createElement(
                  'small',
                  null,
                  _react2.default.createElement(
                    'b',
                    null,
                    'Option 1'
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: 'switch switch-text switch-pill switch-success switch-sm float-right' },
                  _react2.default.createElement(_reactstrap.Input, { type: 'checkbox', className: 'switch-input', defaultChecked: true }),
                  _react2.default.createElement('span', { className: 'switch-label', 'data-on': 'On', 'data-off': 'Off' }),
                  _react2.default.createElement('span', { className: 'switch-handle' })
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'small',
                  { className: 'text-muted' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'aside-options' },
              _react2.default.createElement(
                'div',
                { className: 'clearfix mt-3' },
                _react2.default.createElement(
                  'small',
                  null,
                  _react2.default.createElement(
                    'b',
                    null,
                    'Option 2'
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: 'switch switch-text switch-pill switch-success switch-sm float-right' },
                  _react2.default.createElement(_reactstrap.Input, { type: 'checkbox', className: 'switch-input' }),
                  _react2.default.createElement('span', { className: 'switch-label', 'data-on': 'On', 'data-off': 'Off' }),
                  _react2.default.createElement('span', { className: 'switch-handle' })
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'small',
                  { className: 'text-muted' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'aside-options' },
              _react2.default.createElement(
                'div',
                { className: 'clearfix mt-3' },
                _react2.default.createElement(
                  'small',
                  null,
                  _react2.default.createElement(
                    'b',
                    null,
                    'Option 3'
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: 'switch switch-text switch-pill switch-success switch-sm float-right' },
                  _react2.default.createElement(_reactstrap.Input, { type: 'checkbox', className: 'switch-input' }),
                  _react2.default.createElement('span', { className: 'switch-label', 'data-on': 'On', 'data-off': 'Off' }),
                  _react2.default.createElement('span', { className: 'switch-handle' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'aside-options' },
              _react2.default.createElement(
                'div',
                { className: 'clearfix mt-3' },
                _react2.default.createElement(
                  'small',
                  null,
                  _react2.default.createElement(
                    'b',
                    null,
                    'Option 4'
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: 'switch switch-text switch-pill switch-success switch-sm float-right' },
                  _react2.default.createElement(_reactstrap.Input, { type: 'checkbox', className: 'switch-input', defaultChecked: true }),
                  _react2.default.createElement('span', { className: 'switch-label', 'data-on': 'On', 'data-off': 'Off' }),
                  _react2.default.createElement('span', { className: 'switch-handle' })
                )
              )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'h6',
              null,
              'System Utilization'
            ),
            _react2.default.createElement(
              'div',
              { className: 'text-uppercase mb-1 mt-4' },
              _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'CPU Usage'
                )
              )
            ),
            _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'info', value: '25' }),
            _react2.default.createElement(
              'small',
              { className: 'text-muted' },
              '348 Processes. 1/4 Cores.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'text-uppercase mb-1 mt-2' },
              _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Memory Usage'
                )
              )
            ),
            _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'warning', value: '70' }),
            _react2.default.createElement(
              'small',
              { className: 'text-muted' },
              '11444GB/16384MB'
            ),
            _react2.default.createElement(
              'div',
              { className: 'text-uppercase mb-1 mt-2' },
              _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'SSD 1 Usage'
                )
              )
            ),
            _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'danger', value: '95' }),
            _react2.default.createElement(
              'small',
              { className: 'text-muted' },
              '243GB/256GB'
            ),
            _react2.default.createElement(
              'div',
              { className: 'text-uppercase mb-1 mt-2' },
              _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'SSD 2 Usage'
                )
              )
            ),
            _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'success', value: '10' }),
            _react2.default.createElement(
              'small',
              { className: 'text-muted' },
              '25GB/256GB'
            )
          )
        )
      );
    }
  }]);

  return Aside;
}(_react.Component);

exports.default = Aside;
//# sourceMappingURL=Aside.js.map