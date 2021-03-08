"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PageScaffold = void 0;
var react_1 = __importDefault(require("react"));
var StyleInjector_1 = require("../bases/StyleInjector");
var PageScaffold = function (props) {
    var _a;
    StyleInjector_1.StyleInjector.useStyle("body", {
        background: props.backgroundColor,
        color: props.contrastingColor
    });
    return (react_1["default"].createElement("main", { className: props.className }, (_a = props.child) !== null && _a !== void 0 ? _a : props.children));
};
exports.PageScaffold = PageScaffold;
