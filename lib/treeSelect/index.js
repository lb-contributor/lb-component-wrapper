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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var tree_select_1 = require("antd/es/tree-select");
require("antd/es/tree-select/style");
// export * from 'antd/es/tree-select'
exports.TreeNode = function (props) { return (React.createElement(tree_select_1.default.TreeNode, __assign({}, props))); };
exports.default = tree_select_1.default;
