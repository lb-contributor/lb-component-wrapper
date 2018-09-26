"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var input_1 = require("antd/es/input");
require("antd/es/input/style");
var compare_1 = require("../utils/compare");
var TextArea = input_1.default.TextArea;
var TextAreaWrapper = /** @class */ (function (_super) {
    __extends(TextAreaWrapper, _super);
    function TextAreaWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextAreaWrapper.prototype.shouldComponentUpdate = function (nextProps) {
        return !compare_1.formBaseCompare(this.props, nextProps);
    };
    TextAreaWrapper.prototype.render = function () {
        return (React.createElement(TextArea, __assign({}, this.props)));
    };
    return TextAreaWrapper;
}(React.Component));
exports.default = TextAreaWrapper;