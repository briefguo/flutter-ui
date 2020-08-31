"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.Default = exports.Mobile = exports.Tablet = exports.Desktop = exports.useDevice = void 0;
var react_responsive_1 = require("react-responsive");
var react_1 = __importStar(require("react"));
function useDevice() {
    var isDesktop = react_responsive_1.useMediaQuery({ minWidth: 992 });
    var isTablet = react_responsive_1.useMediaQuery({ minWidth: 768, maxWidth: 991 });
    var isMobile = react_responsive_1.useMediaQuery({ maxWidth: 767 });
    var isNotMobile = react_responsive_1.useMediaQuery({ minWidth: 768 });
    return {
        isDesktop: isDesktop,
        isTablet: isTablet,
        isMobile: isMobile,
        isNotMobile: isNotMobile
    };
}
exports.useDevice = useDevice;
exports.Desktop = function (_a) {
    var children = _a.children;
    var isDesktop = react_responsive_1.useMediaQuery({ minWidth: 992 });
    return react_1["default"].createElement(react_1.Fragment, null, isDesktop ? children : null);
};
exports.Tablet = function (_a) {
    var children = _a.children;
    var isTablet = react_responsive_1.useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return react_1["default"].createElement(react_1.Fragment, null, isTablet ? children : null);
};
exports.Mobile = function (_a) {
    var children = _a.children;
    var isMobile = react_responsive_1.useMediaQuery({ maxWidth: 767 });
    return react_1["default"].createElement(react_1.Fragment, null, isMobile ? children : null);
};
exports.Default = function (_a) {
    var children = _a.children;
    var isNotMobile = react_responsive_1.useMediaQuery({ minWidth: 768 });
    return react_1["default"].createElement(react_1.Fragment, null, isNotMobile ? children : null);
};
