"use strict";
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
var card_1 = require("antd/es/card");
var grid_1 = require("./grid");
exports.CardGrid = grid_1.default;
var meta_1 = require("./meta");
exports.CardMeta = meta_1.default;
require("antd/es/card/style");
var LBCard = function (props) { return (React.createElement(card_1.default, __assign({}, props))); };
exports.default = LBCard;
