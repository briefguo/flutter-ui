"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PageScaffold = void 0;
var react_1 = __importDefault(require("react"));
var Portal_1 = __importDefault(require("react-overlays/Portal"));
var defaultTheme_1 = require("./defaultTheme");
var isServer = typeof window === 'undefined';
exports.PageScaffold = function (props) {
    // const theme = useTheme()
    var bodyChild;
    if (!isServer) {
        bodyChild = document.createElement('div');
        document.body.appendChild(bodyChild);
    }
    if (props.loading) {
        return react_1["default"].createElement(react_1["default"].Fragment, null, "loading...");
    }
    var contrastingColor = props.contrastingColor;
    var backgroundColor = props.backgroundColor;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: props.className }, props.child || props.children),
        props.portal && react_1["default"].createElement(Portal_1["default"], { container: bodyChild }, props.portal),
        props.footer,
        props.modal,
        react_1["default"].createElement(defaultTheme_1.GlobalStyle, { contrastingColor: contrastingColor, backgroundColor: backgroundColor })));
};
