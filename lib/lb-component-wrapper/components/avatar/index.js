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
var avatar_1 = require("antd/es/avatar");
require("antd/es/avatar/style");
var LBAvatar = function (props) { return (React.createElement(avatar_1.default, __assign({}, props))); };
exports.default = LBAvatar;
