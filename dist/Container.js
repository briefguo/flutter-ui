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
exports.Container = void 0;
var react_1 = __importDefault(require("react"));
var renderChildren_1 = require("./renderChildren");
exports.Container = function (props) {
    var contrastingColor = props.contrastingColor, flex = props.flex, id = props.id, expanded = props.expanded, child = props.child, children = props.children, _a = props.visible, visible = _a === void 0 ? true : _a, className = props.className, onClick = props.onClick, styles = __rest(props, ["contrastingColor", "flex", "id", "expanded", "child", "children", "visible", "className", "onClick"]);
    if (child && children) {
        throw Error('child和children不能同时使用');
    }
    if (!visible) {
        return null;
    }
    return (react_1["default"].createElement("div", { id: id, onClick: onClick, className: className !== null && className !== void 0 ? className : '', style: __assign(__assign({}, styles), { cursor: onClick ? 'pointer' : props.cursor, display: flex ? 'flex' : undefined, flex: expanded ? '1 1' : undefined, color: contrastingColor }) }, renderChildren_1.renderChildren(child || children)));
};
