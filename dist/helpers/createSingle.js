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
exports.singleOf = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var StyleInjector_1 = require("../bases/StyleInjector");
var createOf_1 = require("./createOf");
var _omit = function (obj, keys) {
    if (obj === void 0) { obj = {}; }
    if (keys === void 0) { keys = []; }
    var targetObj = {};
    Object.keys(obj)
        .filter(function (k) { return !keys.includes(k); })
        .forEach(function (k) {
        targetObj[k] = obj[k];
    });
    return targetObj;
};
var _commonKeys = ['lg', 'xs'];
// TODO: 调试
// import ReactDOM from 'react-dom'
// import { ScreenDebug } from '../debug/ScreenDebug'
function singleOf(tag, option) {
    var componentPropsKeys = typeof tag !== 'string' ? Object.keys(tag === null || tag === void 0 ? void 0 : tag.defaultProps) : [];
    var componentCSSMapper = typeof tag !== 'string' ? tag.css : undefined;
    var defaultProps = option.defaultProps, selector = option.selector, props2CSSProperties = option.props2CSSProperties, renderChildren = option.renderChildren;
    var TargetC = function (p) {
        var _a;
        var className = StyleInjector_1.StyleInjector.useStyle(selector, __assign(__assign({}, componentCSSMapper === null || componentCSSMapper === void 0 ? void 0 : componentCSSMapper(p)), props2CSSProperties === null || props2CSSProperties === void 0 ? void 0 : props2CSSProperties(p))).className;
        var propsKeys = Object.keys(defaultProps !== null && defaultProps !== void 0 ? defaultProps : {})
            // 当 tag 是 singleOf 创建的组件时，补上它的 keys
            .concat(componentPropsKeys)
            .concat(_commonKeys);
        // eslint-disable-next-line react/no-children-prop
        return react_1["default"].createElement(tag, __assign(__assign({}, _omit(p, propsKeys)), { style: p.style, className: classnames_1["default"](p.className, className, { lg: p.lg, xs: p.xs }), children: (_a = renderChildren === null || renderChildren === void 0 ? void 0 : renderChildren(p)) !== null && _a !== void 0 ? _a : p.children }));
    };
    TargetC.of = createOf_1.createOf(TargetC);
    TargetC.props2CSSProperties = props2CSSProperties;
    TargetC.defaultProps = defaultProps;
    TargetC.selector = selector;
    return TargetC;
}
exports.singleOf = singleOf;
