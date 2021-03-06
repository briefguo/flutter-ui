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
exports.Img = exports.ResponsiveImage = exports.SingleImage = void 0;
var react_1 = __importDefault(require("react"));
var createRSC_1 = require("../helpers/createRSC");
// TODO: 添加borderd
var SingleImage = function (props) { return (react_1["default"].createElement("img", __assign({ width: "100%" }, props, { alt: "" }))); };
exports.SingleImage = SingleImage;
exports.ResponsiveImage = createRSC_1.createRSC(exports.SingleImage);
exports.Img = exports.SingleImage;
