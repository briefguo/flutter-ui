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
exports.ResponsiveImage = void 0;
var react_1 = __importDefault(require("react"));
var Container_1 = require("./Container");
var _rsUtil_1 = require("./_rsUtil");
var rsImageProps = ['src'];
var ResponsiveImage = function (props) {
    var lgProps = _rsUtil_1.pickProps(props, rsImageProps, 'lg');
    var xsProps = _rsUtil_1.pickProps(props, rsImageProps, 'xs');
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Container_1.SingleContainer, { style: { display: 'inline-block', width: '100%' }, lg: true },
            react_1["default"].createElement("img", __assign({ width: "100%" }, lgProps, { alt: "" }))),
        react_1["default"].createElement(Container_1.SingleContainer, { style: { display: 'inline-block', width: '100%' }, xs: true },
            react_1["default"].createElement("img", __assign({ width: "100%" }, xsProps, { alt: "" })))));
};
exports.ResponsiveImage = ResponsiveImage;
