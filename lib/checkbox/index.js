"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
var React = require("react");
var checkbox_1 = require("antd/es/checkbox");
var compare_1 = require("../utils/compare");
require("antd/es/checkbox/style");
var CheckboxGroup = checkbox_1.default.Group;
var CheckboxGroupWrapper = /** @class */ (function (_super) {
    __extends(CheckboxGroupWrapper, _super);
    function CheckboxGroupWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxGroupWrapper.prototype.shouldComponentUpdate = function (nextProps) {
        return !compare_1.formBaseCompare(this.props, nextProps) ||
            !compare_1.shallowCompareArr(this.props.options, nextProps.options);
    };
    CheckboxGroupWrapper.prototype.render = function () {
        return (React.createElement(CheckboxGroup, __assign({}, this.props)));
    };
    return CheckboxGroupWrapper;
}(React.Component));
exports.default = CheckboxGroupWrapper;
