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
exports.Step = void 0;
var React = require("react");
var steps_1 = require("antd/es/steps");
require("antd/es/steps/style");
exports.Step = function (props) { return (React.createElement(steps_1.default.Step, __assign({}, props))); };
exports.default = steps_1.default;
