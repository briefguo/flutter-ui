"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Space = void 0;
var react_1 = __importDefault(require("react"));
var Flex_1 = require("./Flex");
exports.Space = function (props) {
    var gutter = props.gutter || 12;
    var flexDirection;
    if (props.direction === 'vertical') {
        flexDirection = 'column';
    }
    else {
        flexDirection = 'row';
    }
    return (react_1["default"].createElement(Flex_1.Flex, { className: props.className, inline: true, gutter: gutter, align: props.align, direction: flexDirection, style: props.style }, props.children));
};
