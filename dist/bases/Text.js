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
exports.ResponsiveText = exports.Text = exports.SingleText = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var createRSC_1 = require("../helpers/createRSC");
var CSSStyleInjector_1 = require("../helpers/CSSStyleInjector");
var SingleText = function (p) {
    var fontSize = p.fontSize, contrastingColor = p.contrastingColor, color = p.color, textAlign = p.textAlign, whiteSpace = p.whiteSpace, fontWeight = p.fontWeight, lg = p.lg, xs = p.xs, props = __rest(p, ["fontSize", "contrastingColor", "color", "textAlign", "whiteSpace", "fontWeight", "lg", "xs"]);
    return (react_1["default"].createElement(CSSStyleInjector_1.CSSStyleInjector, { classNamePrefix: "single-text", style: {
            fontSize: fontSize,
            color: contrastingColor !== null && contrastingColor !== void 0 ? contrastingColor : color,
            textAlign: textAlign,
            whiteSpace: whiteSpace,
            fontWeight: fontWeight
        } }, function (currentClassName) { return (react_1["default"].createElement("span", __assign({}, props, { className: classnames_1["default"](props.className, currentClassName, { lg: lg, xs: xs }) }), props.children)); }));
};
exports.SingleText = SingleText;
exports.Text = exports.SingleText;
exports.ResponsiveText = createRSC_1.createRSC(exports.SingleText);
