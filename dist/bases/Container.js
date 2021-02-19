"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SizedBox = exports.Container = exports.ResponsiveContainer = exports.SingleContainer = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var createRSC_1 = require("../helpers/createRSC");
var CSSStyleInjector_1 = require("../helpers/CSSStyleInjector");
var ScreenDebug_1 = require("../debug/ScreenDebug");
var SingleContainer = function (p) {
    var contrastingColor = p.contrastingColor, background = p.background, padding = p.padding, margin = p.margin, height = p.height, width = p.width, borderRadius = p.borderRadius, border = p.border, cursor = p.cursor, textAlign = p.textAlign, lg = p.lg, xs = p.xs, otherProps = __rest(p, ["contrastingColor", "background", "padding", "margin", "height", "width", "borderRadius", "border", "cursor", "textAlign", "lg", "xs"]);
    return (react_1["default"].createElement(CSSStyleInjector_1.CSSStyleInjector, { classNamePrefix: "single-container", style: {
            color: contrastingColor,
            background: background,
            padding: padding,
            margin: margin,
            height: height,
            width: width,
            borderRadius: borderRadius,
            border: border,
            cursor: cursor,
            textAlign: textAlign
        } }, function (currentClassName) { return (react_1["default"].createElement("div", __assign({}, otherProps, { className: classnames_1["default"](currentClassName, p.className, { lg: lg, xs: xs }) }),
        react_1["default"].createElement(ScreenDebug_1.ScreenDebug, { "data-screen": p['data-screen'] }),
        p.children)); }));
};
exports.SingleContainer = SingleContainer;
exports.ResponsiveContainer = createRSC_1.createRSC(exports.SingleContainer);
exports.Container = exports.ResponsiveContainer;
exports.SizedBox = exports.ResponsiveContainer;
