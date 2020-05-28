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
exports.RadioButton = exports.RadioGroup = void 0;
var React = require("react");
var radio_1 = require("antd/es/radio");
var radioButton_1 = require("antd/es/radio/radioButton");
require("antd/es/radio/style");
exports.RadioGroup = function (props) { return (React.createElement(radio_1.default.Group, __assign({}, props))); };
exports.RadioButton = function (props) { return (React.createElement(radioButton_1.default, __assign({}, props))); };
exports.default = radio_1.default;
