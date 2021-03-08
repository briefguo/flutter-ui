"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ScreenDebug = void 0;
var react_1 = __importDefault(require("react"));
var StyleInjector_1 = require("../bases/StyleInjector");
var ScreenDebug = function (p) {
    // 使用shadowDOM
    if (process.env.SHOW_SCREEN_DEBUG && p['data-screen']) {
        var screenTitle_1 = p['data-screen'];
        return (react_1["default"].createElement(StyleInjector_1.StyleInjector, { classNamePrefix: "screen-debug__container", style: { position: 'relative', right: 0 } }, function (className) { return (react_1["default"].createElement("div", { className: className },
            react_1["default"].createElement(StyleInjector_1.StyleInjector, { classNamePrefix: "screen-debug", style: {
                    position: 'absolute',
                    top: 0,
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
