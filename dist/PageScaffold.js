"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PageScaffold = void 0;
var react_1 = __importDefault(require("react"));
var Portal_1 = __importDefault(require("react-overlays/Portal"));
var deafultTheme_1 = require("./deafultTheme");
var Container_1 = require("./Container");
var isServer_1 = require("./isServer");
exports.PageScaffold = function (props) {
    var bodyChild;
    if (!isServer_1.isServer) {
        bodyChild = document.createElement('div');
        document.body.appendChild(bodyChild);
    }
    if (props.loading) {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(Container_1.Container.SizedBox, { height: 300 }),
            react_1["default"].createElement(Container_1.Container.SizedBox, { height: 300 })));
    }
    var contrastingColor = props.contrastingColor || deafultTheme_1.theme.defaultContrastingColor;
    var backgroundColor = props.backgroundColor || deafultTheme_1.theme.defaultBodyBackground;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        props.child,
        props.portal && react_1["default"].createElement(Portal_1["default"], { container: bodyChild }, props.portal),
        props.footer,
        props.modal,
        react_1["default"].createElement("style", null, "\n          body {\n            -webkit-font-smoothing: antialiased;\n            text-rendering: optimizeLegibility;\n            color: " + contrastingColor + ";\n            background: " + backgroundColor + " !important;\n          }\n        ")));
};
