'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OriginalInput = exports.Group = exports.Search = undefined;

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compare = require('../utils/compare');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = _input2.default.Search,
    Group = _input2.default.Group;
exports.Search = Search;
exports.Group = Group;
var OriginalInput = exports.OriginalInput = _input2.default;

var InputWrapper = function (_Component) {
  _inherits(InputWrapper, _Component);

  function InputWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InputWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputWrapper.__proto__ || Object.getPrototypeOf(InputWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.focus = function () {
      _this.r.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputWrapper, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _compare.formBaseCompare)(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_input2.default, _extends({}, this.props, { ref: function ref(r) {
          return _this2.r = r;
        } }));
    }
  }]);

  return InputWrapper;
}(_react.Component);

exports.default = InputWrapper;