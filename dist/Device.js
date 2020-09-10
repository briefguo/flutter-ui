"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Default = exports.Mobile = exports.Tablet = exports.Desktop = exports.isDesktop = exports.isMobile = void 0;
var react_1 = __importDefault(require("react"));
var react_responsive_1 = require("react-responsive");
exports.isMobile = '@media screen and (max-width: 767px)';
exports.isDesktop = '@media screen and (min-width: 992px)';
exports.Desktop = function (_a) {
    var children = _a.children;
    var isDesktop = react_responsive_1.useMediaQuery({ minWidth: 992 });
    return isDesktop ? react_1["default"].createElement(react_1["default"].Fragment, null, children) : null;
};
exports.Tablet = function (_a) {
    var children = _a.children;
    var isTablet = react_responsive_1.useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? react_1["default"].createElement(react_1["default"].Fragment, null, children) : null;
};
exports.Mobile = function (_a) {
    var children = _a.children;
    var isMobile = react_responsive_1.useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
};
exports.Default = function (_a) {
    var children = _a.children;
    var isNotMobile = react_responsive_1.useMediaQuery({ minWidth: 768 });
    return isNotMobile ? react_1["default"].createElement(react_1["default"].Fragment, null, children) : null;
};
