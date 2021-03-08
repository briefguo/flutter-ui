"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyleInjector = exports.CSSStyleDeclaration2InlineCSSText = void 0;
var react_1 = __importDefault(require("react"));
var md5_1 = __importDefault(require("md5"));
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
        uuid: md5_1["default"](JSON.stringify(css !== null && css !== void 0 ? css : {})).slice(0, 8)
    };
};
exports.CSSStyleDeclaration2InlineCSSText = CSSStyleDeclaration2InlineCSSText;
var cache = [];
var appendStyle = function (id, css) {
    var styleTag = document.createElement('style');
    styleTag.textContent = css;
    styleTag.id = id;
    if (cache.includes(id)) {
        // document.getElementById(id).remove()
        // document.head.appendChild(styleTag)
    }
    else {
        document.head.appendChild(styleTag);
        cache.push(id);
    }
};
function useStyle(selector, css) {
    var inlineStyle = exports.CSSStyleDeclaration2InlineCSSText(css);
    var targetSelector = selector.replace('[uuid]', inlineStyle.uuid);
    var targetClassName = targetSelector.replace(/^./, '');
    appendStyle(inlineStyle.uuid, targetSelector.concat("{ " + inlineStyle.cssText + " }"));
    return { className: targetClassName };
}
var StyleInjector = function (props) {
    var _a;
    var className = useStyle("." + props.classNamePrefix + "-[uuid]", props.style).className;
    return react_1["default"].createElement(react_1["default"].Fragment, null, (_a = props.children) === null || _a === void 0 ? void 0 : _a.call(props, className));
};
exports.StyleInjector = StyleInjector;
exports.StyleInjector.useStyle = useStyle;
