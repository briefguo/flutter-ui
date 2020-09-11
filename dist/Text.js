"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Text = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Text = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: ", ";\n  font-size: ", ";\n  white-space: ", ";\n"], ["\n  font-weight: ", ";\n  font-size: ", ";\n  white-space: ", ";\n"])), function (props) { return props.fontWeight; }, function (props) { return props.fontSize; }, function (props) { return props.whiteSpace; });
var templateObject_1;
