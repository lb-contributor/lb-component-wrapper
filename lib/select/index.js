'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = undefined;

var _select = require('antd/es/select');

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compare = require('../utils/compare');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectWrapper = function (_Component) {
  _inherits(SelectWrapper, _Component);

  function SelectWrapper() {
    _classCallCheck(this, SelectWrapper);

    return _possibleConstructorReturn(this, (SelectWrapper.__proto__ || Object.getPrototypeOf(SelectWrapper)).apply(this, arguments));
  }

  _createClass(SelectWrapper, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _compare.formBaseCompare)(this.props, nextProps) || !(0, _compare.shallowCompareArr)(this.props.options, nextProps.options);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          read = _props.read,
          props = _objectWithoutProperties(_props, ['options', 'read']);

      if (read) {
        if (options) {
          for (var i = 0; i < options.length; i += 1) {
            if (options[i].value === this.props.value) {
              return _react2.default.createElement(
                'span',
                null,
                options[i].label
              );
            }
          }
        }

        return this.props.value;
      }

      return options ? _react2.default.createElement(
        _select2.default,
        props,
        options.map(function (o) {
          return _react2.default.createElement(
            _select2.default.Option,
            o,
            o.label || o.title
          );
        })
      ) : _react2.default.createElement(_select2.default, this.props);
    }
  }]);

  return SelectWrapper;
}(_react.Component);

exports.default = SelectWrapper;
var Option = _select2.default.Option;
exports.Option = Option;