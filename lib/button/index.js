'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = undefined;

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonWrapper = function (_Component) {
  _inherits(ButtonWrapper, _Component);

  function ButtonWrapper() {
    _classCallCheck(this, ButtonWrapper);

    return _possibleConstructorReturn(this, (ButtonWrapper.__proto__ || Object.getPrototypeOf(ButtonWrapper)).apply(this, arguments));
  }

  _createClass(ButtonWrapper, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.disabled !== nextProps.disabled || this.props.loading !== nextProps.loading || this.props.onClick !== nextProps.onClick;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_button2.default, this.props);
    }
  }]);

  return ButtonWrapper;
}(_react.Component);

ButtonWrapper.propTypes = {
  disabled: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

exports.default = ButtonWrapper;
var ButtonGroup = exports.ButtonGroup = _button2.default.Group;