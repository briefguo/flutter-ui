"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.Center = exports.Flex = exports.gutterMixin = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var Container_1 = require("./Container");
var calcParentGutter = function (props) {
    if (props.direction === 'column') {
        return "-" + props.gutter / 2 + "px 0";
    }
    else {
        return "0 -" + props.gutter / 2 + "px";
    }
};
var calcItemGutter = function (props) {
    if (props.direction === 'column') {
        return props.gutter / 2 + "px 0";
    }
    else {
        return "0 " + props.gutter / 2 + "px";
    }
};
exports.gutterMixin = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: ", ";\n  & > * {\n    margin: ", ";\n  }\n"], ["\n  margin: ", ";\n  & > * {\n    margin: ", ";\n  }\n"])), calcParentGutter, calcItemGutter);
exports.Flex = styled_components_1["default"](Container_1.Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: ", ";\n  flex: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  ", "\n"], ["\n  display: ", ";\n  flex: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  ", "\n"])), function (props) { return (props.inline ? 'inline-flex' : 'flex'); }, function (props) { return (props.expanded ? '1 1' : null); }, function (props) { return props.align; }, function (props) { return props.justify; }, function (props) { return props.direction; }, function (props) { return (props.wrap ? props.wrap : 'nowrap'); }, function (props) { return (props.gutter ? exports.gutterMixin : null); });
exports.Center = styled_components_1["default"](exports.Flex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  justify-content: center;\n  align-items: center;\n"], ["\n  justify-content: center;\n  align-items: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
