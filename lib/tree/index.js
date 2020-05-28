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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryTree = exports.TreeNode = void 0;
var React = require("react");
var tree_1 = require("antd/es/tree");
require("antd/es/tree/style");
__exportStar(require("antd/es/tree"), exports);
// Tree only accept TreeNode as children, any wrapper will not work. so export Tree.TreeNode directly
exports.TreeNode = tree_1.default.TreeNode;
exports.DirectoryTree = function (props) { return (React.createElement(tree_1.default.DirectoryTree, __assign({}, props))); };
exports.default = tree_1.default;
