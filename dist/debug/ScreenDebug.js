"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ScreenDebug = void 0;
var react_1 = __importDefault(require("react"));
var CSSStyleInjector_1 = require("../helpers/CSSStyleInjector");
var ScreenDebug = function (p) {
    if (process.env.SHOW_SCREEN_DEBUG && p['data-screen']) {
        var screenTitle_1 = p['data-screen'];
        return (react_1["default"].createElement(CSSStyleInjector_1.CSSStyleInjector, { classNamePrefix: "screen-debug", style: {
                position: 'sticky',
                top: 0
            } }, function (className) { return react_1["default"].createElement("div", { className: className }, screenTitle_1); }));
    }
    else {
        return null;
    }
};
exports.ScreenDebug = ScreenDebug;
