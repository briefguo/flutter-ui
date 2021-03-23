"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSStyleDeclaration2InlineCSSText = void 0;
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
    return styleString ? styleString + ';' : '';
};
exports.CSSStyleDeclaration2InlineCSSText = CSSStyleDeclaration2InlineCSSText;
