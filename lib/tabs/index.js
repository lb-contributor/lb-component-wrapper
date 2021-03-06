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
var tabs_1 = require("antd/es/tabs");
require("antd/es/tabs/style");
exports.TabPane = function (props) { return (React.createElement(tabs_1.default.TabPane, __assign({}, props))); };
exports.default = tabs_1.default;
