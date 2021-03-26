"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutipleColumn = void 0;
var react_1 = __importDefault(require("react"));
var createOf_1 = require("../helpers/createOf");
var RS_1 = require("./RS");
var MutipleColumn = function (props) {
    var _a, _b;
    var _c = (_a = props.gap) !== null && _a !== void 0 ? _a : [], colGap = _c[0], rowGap = _c[1];
    return (react_1.default.createElement(RS_1.RS.Container, { columnCount: props.count, columnGap: colGap }, (_b = props.children) === null || _b === void 0 ? void 0 : _b.map(function (item, index) { return (react_1.default.createElement("div", { key: index, style: {
            // https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout
            breakInside: 'avoid',
            pageBreakInside: 'avoid',
        } },
        item,
        react_1.default.createElement(RS_1.RS.Container, { height: rowGap }))); })));
};
exports.MutipleColumn = MutipleColumn;
exports.MutipleColumn.of = createOf_1.createOf(exports.MutipleColumn);
