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
exports.StopPropagation = void 0;
var react_1 = __importDefault(require("react"));
var StopPropagation = function (props) {
    return (react_1["default"].createElement("span", __assign({}, props, { onClick: function (e) {
            var _a;
            e.stopPropagation();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), props.children));
};
exports.StopPropagation = StopPropagation;
