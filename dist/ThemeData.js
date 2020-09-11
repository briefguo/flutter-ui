"use strict";
exports.__esModule = true;
exports.ThemeData = void 0;
var Colors_1 = require("./Colors");
var TextThemeData_1 = require("./TextThemeData");
var ThemeData = /** @class */ (function () {
    function ThemeData() {
    }
    ThemeData.defaultTheme = {
        contentContainerWidth: 1080,
        bodyContrastingColor: '#333',
        bodyBackground: '#F5F5F9',
        baseBorderRadius: '5px',
        colors: Colors_1.Colors,
        textTheme: TextThemeData_1.TextThemeData.defaultTextTheme
    };
    return ThemeData;
}());
exports.ThemeData = ThemeData;
