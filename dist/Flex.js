"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Center = exports.Flex = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var Container_1 = require("./Container");
var calcContainerGutter = function (props) {
    if (!props.gutter) {
        return '';
    }
    else {
        if (props.direction === 'column') {
            return "-" + props.gutter / 2 + "px 0";
        }
        else {
            return "0 -" + props.gutter / 2 + "px";
        }
    }
};
var calcGutter = function (props) {
    if (!props.gutter) {
        return '';
    }
    else {
        if (props.direction === 'column') {
            return props.gutter / 2 + "px 0";
        }
        else {
            return "0 " + props.gutter / 2 + "px";
        }
    }
};
exports.Flex = styled_components_1["default"](Container_1.Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  flex: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  margin: ", ";\n  & > * {\n    margin: ", " !important;\n  }\n"], ["\n  display: ", ";\n  flex: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  margin: ", ";\n  & > * {\n    margin: ", " !important;\n  }\n"])), function (props) { return (props.inline ? 'inline-flex' : 'flex'); }, function (props) { return (props.expanded ? '1 1' : null); }, function (props) { return props.align; }, function (props) { return props.justify; }, function (props) { return props.direction; }, function (props) { return (props.wrap ? props.wrap : 'nowrap'); }, calcContainerGutter, calcGutter);
exports.Center = styled_components_1["default"](exports.Flex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  justify-content: center;\n  align-items: center;\n"], ["\n  justify-content: center;\n  align-items: center;\n"])));
var templateObject_1, templateObject_2;
