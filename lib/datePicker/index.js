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
var date_picker_1 = require("antd/es/date-picker");
require("antd/es/date-picker/style");
exports.MonthPicker = date_picker_1.default.MonthPicker, exports.RangePicker = date_picker_1.default.RangePicker, exports.WeekPicker = date_picker_1.default.WeekPicker;
var DatePickerWrapper = /** @class */ (function (_super) {
    __extends(DatePickerWrapper, _super);
    function DatePickerWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // FIXME 补充完整的刷新条件
    DatePickerWrapper.prototype.shouldComponentUpdate = function () {
        return true;
    };
    DatePickerWrapper.prototype.render = function () {
        return (React.createElement(date_picker_1.default, __assign({}, this.props)));
    };
    return DatePickerWrapper;
}(React.Component));
exports.default = DatePickerWrapper;
