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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var input_1 = require("antd/es/input");
require("antd/es/input/style");
var compare_1 = require("../utils/compare");
__export(require("antd/es/input/Search"));
__export(require("antd/es/input/Group"));
var InputWrapper = /** @class */ (function (_super) {
    __extends(InputWrapper, _super);
    function InputWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputWrapper.prototype.shouldComponentUpdate = function (nextProps) {
        return !compare_1.formBaseCompare(this.props, nextProps);
    };
    InputWrapper.prototype.focus = function () {
        this.r && this.r.focus();
    };
    InputWrapper.prototype.render = function () {
        var _this = this;
        return (React.createElement(input_1.default, __assign({}, this.props, { ref: function (r) { return _this.r = r; } })));
    };
    return InputWrapper;
}(React.Component));
exports.default = InputWrapper;
