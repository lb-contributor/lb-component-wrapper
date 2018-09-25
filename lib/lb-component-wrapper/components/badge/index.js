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
var badge_1 = require("antd/es/badge");
require("antd/es/badge/style");
var LBBadge = function (props) { return (React.createElement(badge_1.default, __assign({}, props))); };
exports.default = LBBadge;
