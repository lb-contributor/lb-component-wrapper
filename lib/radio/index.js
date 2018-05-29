'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = exports.RadioGroup = undefined;

var _radio = require('antd/es/radio');

var _radio2 = _interopRequireDefault(_radio);

require('antd/es/radio/style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroup = exports.RadioGroup = _radio2.default.Group;
var RadioButton = exports.RadioButton = _radio2.default.Button;
exports.default = _radio2.default;