"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CSSStyleInjector = exports.CSSStyleDeclaration2InlineCSSText = void 0;
var react_1 = __importDefault(require("react"));
var uuid_1 = require("uuid");
function isNumber(n) {
    return typeof n === 'number';
}
var CSSStyleDeclaration2InlineCSSText = function (css) {
    var excludeUnitProps = ['zIndex'];
    // https://stackoverflow.com/questions/45205593/how-to-convert-a-json-style-object-to-a-css-string
    var styleString = Object.entries(css !== null && css !== void 0 ? css : {})
        .filter(function (_a) {
        var k = _a[0], v = _a[1];
        return v !== undefined;
    })
        .map(function (_a) {
        var k = _a[0], v = _a[1];
        var setValue = function (v) { return (isNumber(v) ? v + "px" : v); };
        var setKey = function (k) {
            return k.replace(/[A-Z]/g, function (match) { return "-" + match.toLowerCase(); });
        };
        if (excludeUnitProps.includes(k)) {
            return setKey(k) + ":" + v;
        }
        else {
            return setKey(k) + ":" + setValue(v);
        }
    })
        .join(';');
    return {
        cssText: styleString ? styleString + ';' : '',
        // TODO: 合并样式
        // uuid: md5(JSON.stringify(css)).slice(0, 8) as string,
        uuid: uuid_1.v4().slice(0, 8)
    };
};
exports.CSSStyleDeclaration2InlineCSSText = CSSStyleDeclaration2InlineCSSText;
var CSSStyleInjector = function (props) {
    var _a, _b;
    // 相同样式的md5值是一样的
    var inlineStyle = exports.CSSStyleDeclaration2InlineCSSText(props.style);
    var currentClassName = props.classNamePrefix + "-" + inlineStyle.uuid;
    if (inlineStyle.cssText) {
        // TODO: 合并去重
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("style", { "data-target": currentClassName, scoped: true }, "." + currentClassName + " {" + inlineStyle.cssText + "}"), (_a = props.children) === null || _a === void 0 ? void 0 :
            _a.call(props, currentClassName)));
    }
    else {
        return react_1["default"].createElement(react_1["default"].Fragment, null, (_b = props.children) === null || _b === void 0 ? void 0 : _b.call(props, undefined));
    }
};
exports.CSSStyleInjector = CSSStyleInjector;
