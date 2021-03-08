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
exports.ScreenScaffold = void 0;
var react_1 = __importDefault(require("react"));
var RS_1 = require("../extends/RS");
var ScreenScaffold = function (props) {
    var _a;
    var content = props.content, layout = props.layout, child = props.child, bgProps = __rest(props, ["content", "layout", "child"]);
    return (react_1["default"].createElement(RS_1.RS.Background, __assign({}, bgProps),
        react_1["default"].createElement(RS_1.RS.Content, { height: "100%" },
            react_1["default"].createElement(RS_1.RS.Layout, { alignment: layout }, (_a = content !== null && content !== void 0 ? content : child) !== null && _a !== void 0 ? _a : props.children))));
};
exports.ScreenScaffold = ScreenScaffold;
