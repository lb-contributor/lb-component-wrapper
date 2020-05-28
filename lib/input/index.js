"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.OriginalInput = exports.Group = exports.Search = void 0;
var React = require("react");
var input_1 = require("antd/es/input");
require("antd/es/input/style");
var compare_1 = require("../utils/compare");
var search_1 = require("./search");
exports.Search = search_1.default;
var group_1 = require("./group");
exports.Group = group_1.default;
var InputWrapper = /** @class */ (function (_super) {
    __extends(InputWrapper, _super);
    function InputWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputWrapper.prototype.shouldComponentUpdate = function (nextProps) {
        return !compare_1.formBaseCompare(this.props, nextProps);
    };
    InputWrapper.prototype.focus = function () {
        if (this.r) {
            this.r.focus();
        }
    };
    InputWrapper.prototype.render = function () {
        var _this = this;
        return (React.createElement(input_1.default, __assign({}, this.props, { ref: function (r) { return _this.r = r; } })));
    };
    return InputWrapper;
}(React.Component));
exports.OriginalInput = input_1.default;
exports.default = InputWrapper;
