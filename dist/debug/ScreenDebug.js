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
        return (react_1["default"].createElement(CSSStyleInjector_1.CSSStyleInjector, { classNamePrefix: "screen-debug__container", style: { position: 'relative' } }, function (className) { return (react_1["default"].createElement("div", { className: className },
            react_1["default"].createElement(CSSStyleInjector_1.CSSStyleInjector, { classNamePrefix: "screen-debug", style: {
                    position: 'absolute',
                    right: 0,
                    color: '#fff',
                    padding: 15,
                    textAlign: 'center',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    backdropFilter: 'saturate(180%) blur(20px)',
                    borderRadius: '24px 0 0 24px',
                    background: 'rgba(0,0,0,0.5)'
                } }, function (className) { return (react_1["default"].createElement("div", { className: className },
                "screen-",
                screenTitle_1)); }))); }));
    }
    else {
        return null;
    }
};
exports.ScreenDebug = ScreenDebug;
