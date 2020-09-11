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
exports.ThemeData = void 0;
var Colors_1 = require("./Colors");
var TextThemeData_1 = require("./TextThemeData");
var ThemeData = /** @class */ (function () {
    function ThemeData(v) {
        var _this = this;
        this.contentContainerWidth = 1080;
        this.bodyContrastingColor = '#333';
        this.bodyBackground = '#F5F5F9';
        this.baseBorderRadius = '5px';
        this.colors = Colors_1.Colors;
        this.textTheme = TextThemeData_1.TextThemeData.defaultTextTheme;
        Object.keys(v).forEach(function (k) { return (_this[k] = v[k]); });
    }
    ThemeData.prototype.copyWith = function (v) {
        return new ThemeData(__assign(__assign({}, this), v));
    };
    ThemeData.defaultTheme = new ThemeData({});
    return ThemeData;
}());
exports.ThemeData = ThemeData;
