'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = require('antd/es/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/checkbox/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compare = require('../utils/compare');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxGroup = _checkbox2.default.Group;

var CheckboxGroupWrapper = function (_Component) {
  _inherits(CheckboxGroupWrapper, _Component);

  function CheckboxGroupWrapper() {
    _classCallCheck(this, CheckboxGroupWrapper);

    return _possibleConstructorReturn(this, (CheckboxGroupWrapper.__proto__ || Object.getPrototypeOf(CheckboxGroupWrapper)).apply(this, arguments));
  }

  _createClass(CheckboxGroupWrapper, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _compare.formBaseCompare)(this.props, nextProps) || !(0, _compare.shallowCompareArr)(this.props.options, nextProps.options);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(CheckboxGroup, this.props);
    }
  }]);

  return CheckboxGroupWrapper;
}(_react.Component);

exports.default = CheckboxGroupWrapper;