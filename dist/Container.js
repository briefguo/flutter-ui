"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SizedBox = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: ", ";\n  color: ", ";\n  background: ", ";\n  padding: ", ";\n  margin: ", ";\n  height: ", ";\n  width: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: ", ";\n"], ["\n  cursor: ", ";\n  color: ", ";\n  background: ", ";\n  padding: ", ";\n  margin: ", ";\n  height: ", ";\n  width: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: ", ";\n"])), function (props) { return (props.onClick ? 'pointer' : props.cursor); }, function (props) { var _a; return (_a = props.contrastingColor) !== null && _a !== void 0 ? _a : props.color; }, function (props) { return props.background; }, function (props) { return props.padding; }, function (props) { return props.margin; }, function (props) { return props.height; }, function (props) { return props.width; }, function (props) { return props.border; }, function (props) { return props.borderRadius; }, function (props) { return (props.visible ? 'inherit' : 'none'); });
exports.SizedBox = styled_components_1["default"](exports.Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2;
