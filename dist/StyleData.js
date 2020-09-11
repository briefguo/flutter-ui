"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.StyleData = void 0;
var StyleData = /** @class */ (function () {
    function StyleData(v) {
        var _this = this;
        if (v === void 0) { v = {}; }
        Object.keys(v).forEach(function (k) { return (_this[k] = v[k]); });
    }
    StyleData.prototype.copyWith = function (v) {
        return new StyleData(__assign(__assign({}, this), v));
    };
    return StyleData;
}());
exports.StyleData = StyleData;
