'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectoryTree = exports.TreeNode = undefined;

var _tree = require('antd/es/tree');

var _tree2 = _interopRequireDefault(_tree);

require('antd/es/tree/style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeNode = _tree2.default.TreeNode,
    DirectoryTree = _tree2.default.DirectoryTree;
exports.TreeNode = TreeNode;
exports.DirectoryTree = DirectoryTree;
exports.default = _tree2.default;