"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Content = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var Container_1 = require("./Container");
var Device_1 = require("./Device");
exports.Content = styled_components_1["default"](Container_1.Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", " {\n    margin: 0 auto;\n    width: 768px;\n  }\n  ", " {\n    margin: 0 24px;\n  }\n"], ["\n  ", " {\n    margin: 0 auto;\n    width: 768px;\n  }\n  ", " {\n    margin: 0 24px;\n  }\n"])), Device_1.isDesktop, Device_1.isMobile);
var templateObject_1;
