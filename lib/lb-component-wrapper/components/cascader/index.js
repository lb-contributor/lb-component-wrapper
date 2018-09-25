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
var cascader_1 = require("antd/es/cascader");
require("antd/es/cascader/style");
var LBCascader = /** @class */ (function (_super) {
    __extends(LBCascader, _super);
    function LBCascader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // FIXME 补充完整的刷新条件
    LBCascader.prototype.shouldComponentUpdate = function () {
        return true;
    };
    LBCascader.prototype.render = function () {
        return (React.createElement(cascader_1.default, __assign({}, this.props)));
    };
    return LBCascader;
}(React.Component));
exports.default = LBCascader;
