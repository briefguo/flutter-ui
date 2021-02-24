"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ListBuilder = void 0;
var react_1 = __importDefault(require("react"));
var Space_1 = require("../bases/Space");
function ListBuilder(props) {
    var _a;
    return (react_1["default"].createElement(Space_1.ResponsiveSpace, { size: props.gutter, style: props.style }, (_a = props.items) === null || _a === void 0 ? void 0 : _a.map(function (item) { return props.builder(item); })));
}
exports.ListBuilder = ListBuilder;
