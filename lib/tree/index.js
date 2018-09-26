"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var tree_1 = require("antd/es/tree");
require("antd/es/tree/style");
__export(require("antd/es/tree"));
exports.TreeNode = function (props) { return (React.createElement(tree_1.default.TreeNode, __assign({}, props))); };
exports.DirectoryTree = function (props) { return (React.createElement(tree_1.default.DirectoryTree, __assign({}, props))); };
exports.default = tree_1.default;
