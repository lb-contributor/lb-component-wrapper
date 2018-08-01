'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interfaces = exports.utils = undefined;

var _upload = require('antd/es/upload');

var _upload2 = _interopRequireDefault(_upload);

require('antd/es/upload/style');

var _utils = require('antd/lib/upload/utils');

var _interface = require('antd/lib/upload/interface');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = exports.utils = { T: _utils.T, fileToObject: _utils.fileToObject, genPercentAdd: _utils.genPercentAdd, getFileItem: _utils.getFileItem, removeFileItem: _utils.removeFileItem };

var interfaces = exports.interfaces = { UploadListProps: _interface.UploadListProps, UploadFile: _interface.UploadFile, UploadListType: _interface.UploadListType };

exports.default = _upload2.default;