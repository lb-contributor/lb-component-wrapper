'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeekPicker = exports.RangePicker = exports.MonthPicker = undefined;

var _datePicker = require('antd/es/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/date-picker/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthPicker = _datePicker2.default.MonthPicker,
    RangePicker = _datePicker2.default.RangePicker,
    WeekPicker = _datePicker2.default.WeekPicker;
exports.MonthPicker = MonthPicker;
exports.RangePicker = RangePicker;
exports.WeekPicker = WeekPicker;

var DatePickerWrapper = function (_Component) {
  _inherits(DatePickerWrapper, _Component);

  function DatePickerWrapper() {
    _classCallCheck(this, DatePickerWrapper);

    return _possibleConstructorReturn(this, (DatePickerWrapper.__proto__ || Object.getPrototypeOf(DatePickerWrapper)).apply(this, arguments));
  }

  _createClass(DatePickerWrapper, [{
    key: 'shouldComponentUpdate',

    // FIXME 补充完整的刷新条件
    value: function shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_datePicker2.default, this.props);
    }
  }]);

  return DatePickerWrapper;
}(_react.Component);

exports.default = DatePickerWrapper;