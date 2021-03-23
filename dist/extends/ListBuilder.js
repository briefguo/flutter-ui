"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBuilder = void 0;
var react_1 = __importDefault(require("react"));
var RS_1 = require("./RS");
var createOf_1 = require("../helpers/createOf");
function ListBuilder(props) {
    var _a;
    return (react_1.default.createElement(RS_1.RS.Space, { size: props.gutter, style: props.style }, (_a = props.items) === null || _a === void 0 ? void 0 : _a.map(function (item) { var _a; return (_a = props.builder) === null || _a === void 0 ? void 0 : _a.call(props, item); })));
}
exports.ListBuilder = ListBuilder;
ListBuilder.of = createOf_1.createOf(ListBuilder);
