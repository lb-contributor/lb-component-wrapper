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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var select_1 = require("antd/es/select");
var compare_1 = require("../utils/compare");
require("antd/es/select/style");
var SelectWrapper = /** @class */ (function (_super) {
    __extends(SelectWrapper, _super);
    function SelectWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectWrapper.prototype.shouldComponentUpdate = function (nextProps) {
        return !compare_1.formBaseCompare(this.props, nextProps) ||
            !compare_1.shallowCompareArr(this.props.options, nextProps.options);
    };
    SelectWrapper.prototype.render = function () {
        var _a = this.props, options = _a.options, props = __rest(_a, ["options"]);
        return options ? (React.createElement(select_1.default, __assign({}, props), options.map(function (o) { return (React.createElement(select_1.default.Option, __assign({}, o), o.label || o.title)); }))) : (React.createElement(select_1.default, __assign({}, this.props)));
    };
    return SelectWrapper;
}(React.Component));
exports.default = SelectWrapper;
exports.Option = select_1.default.Option;
