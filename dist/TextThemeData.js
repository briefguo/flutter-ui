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
exports.TextThemeData = void 0;
var Colors_1 = require("./Colors");
var StyleData_1 = require("./StyleData");
var TextThemeData = /** @class */ (function () {
    function TextThemeData(v) {
        var _this = this;
        Object.keys(v).forEach(function (k) { return (_this[k] = v[k]); });
    }
    TextThemeData.prototype.copyWith = function (v) {
        return new TextThemeData(__assign(__assign({}, this), v));
    };
    // level
    TextThemeData["default"] = new StyleData_1.StyleData({
        fontSize: 14
    });
    TextThemeData.small = new StyleData_1.StyleData({
        fontSize: 12
    });
    TextThemeData.middle = new StyleData_1.StyleData({
        fontSize: 17
    });
    TextThemeData.large = new StyleData_1.StyleData({
        fontSize: 24
    });
    TextThemeData.xlarge = new StyleData_1.StyleData({
        fontSize: 36
    });
    TextThemeData.xxlarge = new StyleData_1.StyleData({
        fontSize: 48
    });
    TextThemeData.defaultTextTheme = new TextThemeData(__assign(__assign({}, TextThemeData), { title: TextThemeData.middle, description: TextThemeData.small.copyWith({ color: Colors_1.Colors.secondary }), body: TextThemeData["default"] }));
    return TextThemeData;
}());
exports.TextThemeData = TextThemeData;
