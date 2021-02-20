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
exports.Layout = exports.SingleLayout = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var CSSStyleInjector_1 = require("../helpers/CSSStyleInjector");
var layouts = {
    center: {
        justifyContent: 'center',
        flex: '1 1 auto',
        height: '100%',
        textAlign: 'center',
        alignItems: 'center'
    },
    leftBottom: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        height: '100%',
        flex: '1 1 auto'
    },
    rightTop: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        flex: '1 1 auto'
    },
    rightBottom: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flex: '1 1 auto',
        height: '100%'
    },
    leftTop: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: '1 1 auto'
    },
    leftCenter: {
        flexDirection: 'column',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    rightCenter: {
        flexDirection: 'column',
        flex: '1 1 auto',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
};
var _mapLayoutPropsToFlexProps = function (layout) {
    var layoutProps;
    if (Object.keys(layouts).includes(layout)) {
        layoutProps = layouts[layout];
    }
    else {
        layoutProps = layout;
    }
    return layoutProps;
};
var SingleLayout = function (p) {
    var inline = p.inline, wrap = p.wrap, alignment = p.alignment, props = __rest(p, ["inline", "wrap", "alignment"]);
    return (react_1["default"].createElement(CSSStyleInjector_1.CSSStyleInjector, { classNamePrefix: "single-layout", style: __assign(__assign({ display: inline ? 'inline-flex' : 'flex' }, _mapLayoutPropsToFlexProps(alignment)), { flexWrap: wrap }) }, function (currentClassName) { return (react_1["default"].createElement("div", __assign({}, props, { className: classnames_1["default"](props.className, currentClassName) }), props.children)); }));
};
exports.SingleLayout = SingleLayout;
exports.SingleLayout.mapLayoutPropsToFlexProps = _mapLayoutPropsToFlexProps;
exports.Layout = exports.SingleLayout;
