"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageScaffold = void 0;
var react_1 = __importDefault(require("react"));
var PageScaffold = function (props) {
    var _a;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("style", null, "body { background: " + props.backgroundColor + "; color: " + props.contrastingColor + "; }"),
        react_1.default.createElement("main", { className: props.className }, (_a = props.child) !== null && _a !== void 0 ? _a : props.children)));
};
exports.PageScaffold = PageScaffold;
