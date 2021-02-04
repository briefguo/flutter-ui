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
exports.ResponsiveText = exports.Text = exports.SingleText = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var _rsUtil_1 = require("./_rsUtil");
var Device_1 = require("./Device");
var propsKeys = [
    'fontSize',
    'fontWeight',
    'textAlign',
    'whiteSpace',
    'color',
    'className',
    'style',
];
var mapPropsToStyle = function (p) { return (__assign({ fontSize: p.fontSize, color: p.color, textAlign: p.textAlign, whiteSpace: p.whiteSpace, fontWeight: p.fontWeight }, p.style)); };
var SingleText = function (props) {
    return (react_1["default"].createElement("span", { style: mapPropsToStyle(props), className: classnames_1["default"](props.className, 'single-text', {
            lg: props.lg,
            xs: props.xs
        }) }, props.children));
};
exports.SingleText = SingleText;
exports.Text = exports.SingleText;
var ResponsiveText = function (props) {
    var lgProps = _rsUtil_1.pickProps(props, propsKeys, 'lg');
    var xsProps = _rsUtil_1.pickProps(props, propsKeys, 'xs');
    // TODO: 待优化实现
    var _a = Device_1.useDevices(), isDefault = _a.isDefault, isMobile = _a.isMobile;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        isDefault && (react_1["default"].createElement(exports.SingleText, __assign({ lg: true }, lgProps), props.children)),
        isMobile && (react_1["default"].createElement(exports.SingleText, __assign({ xs: true }, xsProps), props.children))));
};
exports.ResponsiveText = ResponsiveText;
