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
var layout_1 = require("antd/es/layout");
var sider_1 = require("./sider");
exports.Sider = sider_1.default;
require("antd/es/layout/style");
var Header = function (props) { return (React.createElement(layout_1.default.Header, __assign({}, props))); };
exports.Header = Header;
var Footer = function (props) { return (React.createElement(layout_1.default.Footer, __assign({}, props))); };
exports.Footer = Footer;
var Content = function (props) { return (React.createElement(layout_1.default.Content, __assign({}, props))); };
exports.Content = Content;
exports.default = layout_1.default;
