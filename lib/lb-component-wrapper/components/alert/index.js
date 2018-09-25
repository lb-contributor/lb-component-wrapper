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
var alert_1 = require("antd/es/alert");
require("antd/es/alert/style");
var LBAlert = function (props) { return React.createElement(alert_1.default, __assign({}, props)); };
exports.default = LBAlert;
