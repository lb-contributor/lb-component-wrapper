'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleRow = undefined;

var _row = require('antd/es/row');

var _row2 = _interopRequireDefault(_row);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/es/row/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SimpleRow = exports.SimpleRow = _row2.default;

exports.default = function (_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(_row2.default, _extends({ type: 'flex', align: 'top' }, props));
};