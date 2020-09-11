"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PageScaffold = void 0;
var react_1 = __importDefault(require("react"));
var Portal_1 = __importDefault(require("react-overlays/Portal"));
var styled_components_1 = require("styled-components");
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color:", ";\n  background:", ";\n"], ["\n  color:", ";\n  background:", ";\n"])), function (props) { return props.color; }, function (props) { return props.background; });
exports.PageScaffold = function (props) {
    var portalContainer;
    if (typeof window !== 'undefined') {
        portalContainer = document.createElement('div');
        document.body.appendChild(portalContainer);
    }
    if (props.loading) {
        return react_1["default"].createElement(react_1["default"].Fragment, null, "loading...");
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(GlobalStyle, { color: props.contrastingColor, background: props.backgroundColor }),
        react_1["default"].createElement("main", { className: props.className }, props.child || props.children),
        props.portal && (react_1["default"].createElement(Portal_1["default"], { container: portalContainer }, props.portal))));
};
var templateObject_1;
