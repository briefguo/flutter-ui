"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Space = void 0;
var Flex_1 = require("./Flex");
var styled_components_1 = __importDefault(require("styled-components"));
exports.Space = styled_components_1["default"](Flex_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: 'inline-flex';\n"], ["\n  display: 'inline-flex';\n"])));
var templateObject_1;
