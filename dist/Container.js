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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ResponsiveBackground = exports.SingleVideoBackground = exports.SingleBackground = exports.ResponsiveContainer = exports.SizedBox = exports.Container = exports.SingleContainer = exports.rsContainerPropsKeys = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var _rsUtil_1 = require("./_rsUtil");
var Device_1 = require("./Device");
var SHOW_SCREEN_DEBUG = process.env.SHOW_SCREEN_DEBUG;
exports.rsContainerPropsKeys = [
    'contrastingColor',
    'background',
    'padding',
    'margin',
    'height',
    'width',
    'borderRadius',
    'border',
    'cursor',
    'textAlign',
    'style',
    'className',
    'data-screen',
    'onClick',
];
var mapPropsToStyle = function (p) {
    var _a;
    return (__assign({ position: SHOW_SCREEN_DEBUG && p['data-screen'] ? 'relative' : (_a = p.style) === null || _a === void 0 ? void 0 : _a.position, background: p.background, padding: p.padding, margin: p.margin, height: p.height, color: p.contrastingColor, width: p.width, borderRadius: p.borderRadius, border: p.border, cursor: p.cursor, textAlign: p.textAlign }, p.style));
};
var SingleContainer = function (props) {
    return (react_1["default"].createElement("div", { "data-screen": props['data-screen'], style: mapPropsToStyle(props), className: classnames_1["default"](props.className, 'single-container', {
            lg: props.lg,
            xs: props.xs
        }), onClick: props.onClick },
        SHOW_SCREEN_DEBUG && props['data-screen'] && (react_1["default"].createElement("div", { style: {
                position: 'absolute',
                right: 0,
                top: '50%',
                textAlign: 'right',
                zIndex: 2
            } },
            react_1["default"].createElement("span", { style: {
                    background: '#000',
                    color: '#fff',
                    fontSize: 30,
                    padding: 20,
                    opacity: 0.4
                } },
                "screen-",
                props['data-screen']))),
        props.children));
};
exports.SingleContainer = SingleContainer;
exports.Container = exports.SingleContainer;
exports.SizedBox = exports.SingleContainer;
var ResponsiveContainer = function (props) {
    var lgProps = _rsUtil_1.pickProps(props, exports.rsContainerPropsKeys, 'lg');
    var xsProps = _rsUtil_1.pickProps(props, exports.rsContainerPropsKeys, 'xs');
    // TODO: 待优化实现
    var _a = Device_1.useDevices(), isDefault = _a.isDefault, isMobile = _a.isMobile;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        isDefault && (react_1["default"].createElement(exports.SingleContainer, __assign({ lg: true }, lgProps), props.children)),
        isMobile && (react_1["default"].createElement(exports.SingleContainer, __assign({ xs: true }, xsProps), props.children))));
};
exports.ResponsiveContainer = ResponsiveContainer;
var SingleBackground = function (props) {
    var _a;
    return (react_1["default"].createElement(exports.SingleContainer, __assign({}, props, { background: (_a = props.background) !== null && _a !== void 0 ? _a : "url(" + props.src + ")", className: classnames_1["default"](props.className, 'single-background') }), props.children));
};
exports.SingleBackground = SingleBackground;
var SingleVideoBackground = function (props) {
    var isDefault = Device_1.useDevices().isDefault;
    return (react_1["default"].createElement(exports.SingleContainer, __assign({ className: "single-video-background" }, props),
        react_1["default"].createElement("video", { className: "single-video-background__video", style: {
                height: props.height
            }, autoPlay: !!isDefault, muted: true, src: props.src, ref: props.useRef })));
};
exports.SingleVideoBackground = SingleVideoBackground;
var ResponsiveBackground = function (props) {
    var _a, _b, _c, _d;
    return (react_1["default"].createElement(exports.ResponsiveContainer, __assign({ contrastingColor: "#fff" }, props, { background: {
            lg: (_a = props.background) !== null && _a !== void 0 ? _a : "center/cover url(" + (((_b = props.src) === null || _b === void 0 ? void 0 : _b.lg) || props.src) + ")",
            xs: (_c = props.background) !== null && _c !== void 0 ? _c : "center/cover url(" + (((_d = props.src) === null || _d === void 0 ? void 0 : _d.xs) || props.src) + ")"
        }, className: classnames_1["default"](props.className, 'responsive-background') }), props.children));
};
exports.ResponsiveBackground = ResponsiveBackground;
