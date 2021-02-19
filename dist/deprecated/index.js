"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Default = exports.Mobile = exports.Tablet = exports.Desktop = exports.useDevices = exports.isDefault = exports.isNotMobile = exports.isDesktop = exports.isMobile = void 0;
var react_1 = __importDefault(require("react"));
var react_responsive_1 = require("react-responsive");
exports.isMobile = '@media screen and (max-width: 767px)';
exports.isDesktop = '@media screen and (min-width: 992px)';
/**
 * @deprecated
 */
exports.isNotMobile = '@media screen and (min-width: 768px)';
exports.isDefault = '@media screen and (min-width: 768px)';
// media query
// TODO: 此处暂不支持SSR，待进一步优化，不推荐广泛使用
var useDevices = function () {
    var isMobile = react_responsive_1.useMediaQuery({ maxWidth: 767 });
    var isDefault = react_responsive_1.useMediaQuery({ minWidth: 768 });
    return {
        isMobile: isMobile,
        isDefault: isDefault
    };
};
exports.useDevices = useDevices;
var Desktop = function (_a) {
    var children = _a.children;
    var isDesktop = react_responsive_1.useMediaQuery({ minWidth: 992 });
    return isDesktop ? react_1["default"].createElement(react_1["default"].Fragment, null, children) : null;
};
exports.Desktop = Desktop;
var Tablet = function (_a) {
    var children = _a.children;
    var isTablet = react_responsive_1.useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? react_1["default"].createElement(react_1["default"].Fragment, null, children) : null;
};
exports.Tablet = Tablet;
var Mobile = function (_a) {
    var children = _a.children;
    var isMobile = react_responsive_1.useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
};
exports.Mobile = Mobile;
var Default = function (_a) {
    var children = _a.children;
    var isNotMobile = react_responsive_1.useMediaQuery({ minWidth: 768 });
    return isNotMobile ? react_1["default"].createElement(react_1["default"].Fragment, null, children) : null;
};
exports.Default = Default;
