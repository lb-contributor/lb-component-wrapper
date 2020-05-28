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
exports.Divider = exports.SubMenu = exports.Item = void 0;
var React = require("react");
var menu_1 = require("antd/es/menu");
require("antd/es/menu/style");
var MenuItem_1 = require("antd/es/menu/MenuItem");
exports.Item = MenuItem_1.default;
var SubMenu_1 = require("antd/es/menu/SubMenu");
exports.SubMenu = SubMenu_1.default;
var MenuWrapper = /** @class */ (function (_super) {
    __extends(MenuWrapper, _super);
    function MenuWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // FIXME 补充完整的刷新条件
    MenuWrapper.prototype.shouldComponentUpdate = function () {
        return true;
    };
    MenuWrapper.prototype.render = function () {
        return (React.createElement(menu_1.default, __assign({}, this.props)));
    };
    return MenuWrapper;
}(React.Component));
var Divider = function (props) { return (React.createElement(menu_1.default.Divider, __assign({}, props))); };
exports.Divider = Divider;
exports.default = MenuWrapper;
