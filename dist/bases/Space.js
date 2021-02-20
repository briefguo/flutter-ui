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
exports.Space = exports.ResponsiveSpace = exports.SingleSpace = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var createRSC_1 = require("../helpers/createRSC");
var CSSStyleInjector_1 = require("../helpers/CSSStyleInjector");
function SingleSpace(p) {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
    // https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap
    var _a = p.direction, direction = _a === void 0 ? 'horizen' : _a, _b = p.box, box = _b === void 0 ? 'inline-flex' : _b, align = p.align, size = p.size, props = __rest(p, ["direction", "box", "align", "size"]);
    switch (direction) {
        case 'vertical':
            return (react_1["default"].createElement(CSSStyleInjector_1.CSSStyleInjector, { classNamePrefix: "single-space", style: {
                    display: box,
                    flexDirection: 'column',
                    alignItems: align,
                    marginTop: -size / 2,
                    marginBottom: -size / 2
                } }, function (className) { return (react_1["default"].createElement("div", __assign({}, props, { className: classnames_1["default"](props.className, className, "is-" + direction) }), props.children.map(function (child, index) { return (react_1["default"].createElement(CSSStyleInjector_1.CSSStyleInjector, { key: index, classNamePrefix: "single-space__item", style: { marginTop: size / 2, marginBottom: size / 2 } }, function (className) { return react_1["default"].createElement("div", { className: classnames_1["default"](className) }, child); })); }))); }));
        case 'horizen':
        default:
            return (react_1["default"].createElement(CSSStyleInjector_1.CSSStyleInjector, { classNamePrefix: "single-space", style: {
                    display: box,
                    alignItems: align,
                    marginLeft: -size / 2,
                    marginRight: -size / 2
                } }, function (className) { return (react_1["default"].createElement("div", __assign({}, props, { className: classnames_1["default"](props.className, className, "is-" + direction) }), props.children.map(function (child, index) { return (react_1["default"].createElement(CSSStyleInjector_1.CSSStyleInjector, { key: index, classNamePrefix: "single-space__item", style: {
                    flex: box === 'flex' ? '1 1' : undefined,
                    marginLeft: size / 2,
                    marginRight: size / 2
                } }, function (className) { return react_1["default"].createElement("div", { className: classnames_1["default"](className) }, child); })); }))); }));
    }
}
exports.SingleSpace = SingleSpace;
exports.ResponsiveSpace = createRSC_1.createRSC(SingleSpace);
exports.Space = SingleSpace;
