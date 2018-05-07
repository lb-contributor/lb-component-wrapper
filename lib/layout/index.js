'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = exports.Content = exports.Header = undefined;

var _layout = require('antd/es/layout');

var _layout2 = _interopRequireDefault(_layout);

require('antd/es/layout/style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _layout2.default.Header,
    Content = _layout2.default.Content,
    Footer = _layout2.default.Footer;
exports.Header = Header;
exports.Content = Content;
exports.Footer = Footer;
exports.default = _layout2.default;