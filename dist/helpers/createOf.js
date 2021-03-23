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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOf = void 0;
var react_1 = __importDefault(require("react"));
function createOf(C) {
    return function (base) {
        var _a;
        var TargetC = function (p) { return react_1.default.createElement(C, __assign({}, base, p)); };
        TargetC.displayName = (_a = C.displayName) !== null && _a !== void 0 ? _a : C.name;
        TargetC.of = createOf(TargetC);
        return TargetC;
    };
}
exports.createOf = createOf;
