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
exports.Content = exports.ResponsiveContent = void 0;
var react_1 = __importDefault(require("react"));
var Container_1 = require("../bases/Container");
var ResponsiveContent = function (props) {
    return (react_1["default"].createElement(Container_1.ResponsiveContainer, __assign({ margin: { xs: '0 20px', lg: '0 auto' }, width: { lg: 1200 } }, props), props.children));
};
exports.ResponsiveContent = ResponsiveContent;
exports.Content = exports.ResponsiveContent;
