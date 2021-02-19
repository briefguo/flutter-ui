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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Flex = exports.ResponsiveFlex = exports.Center = exports.SingleCenter = exports.SingleColumn = exports.SingleFlex = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var createRSC_1 = require("../helpers/createRSC");
var Layout_1 = require("./Layout");
var CSSStyleInjector_1 = require("../helpers/CSSStyleInjector");
var SingleFlex = function (p) {
    return (react_1["default"].createElement(CSSStyleInjector_1.CSSStyleInjector, { classNamePrefix: "single-flex", style: __assign(__assign({ display: p.inline ? 'inline-flex' : 'flex', justifyContent: p.justify, flexWrap: p.wrap, height: p.expanded ? '100%' : undefined, flex: p.expanded ? '1 1 auto' : undefined, flexDirection: p.direction, alignItems: p.align }, Layout_1.SingleLayout.mapLayoutPropsToFlexProps(p.layout)), p.style) }, function (className) { return (react_1["default"].createElement("div", { className: classnames_1["default"](className, p.className, { lg: p.lg, xs: p.xs }) }, p.children)); }));
};
exports.SingleFlex = SingleFlex;
var SingleColumn = function (props) {
    return (react_1["default"].createElement(exports.SingleFlex, __assign({ direction: "column" }, props), props.children));
};
exports.SingleColumn = SingleColumn;
var SingleCenter = function (props) {
    return (react_1["default"].createElement(exports.SingleColumn, __assign({ layout: "center" }, props), props.children));
};
exports.SingleCenter = SingleCenter;
exports.Center = exports.SingleCenter;
exports.ResponsiveFlex = createRSC_1.createRSC(exports.SingleFlex);
exports.Flex = exports.ResponsiveFlex;
