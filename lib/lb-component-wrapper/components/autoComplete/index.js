"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var auto_complete_1 = require("antd/es/auto-complete");
require("antd/es/auto-complete/style");
var LBAutoComplete = function (props) { return (React.createElement(auto_complete_1.default, __assign({}, props))); };
exports.default = LBAutoComplete;
