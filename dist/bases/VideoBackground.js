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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoBackground = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Container_1 = require("./Container");
var VideoBackground = function (p) {
    var src = p.src, useRef = p.useRef, props = __rest(p, ["src", "useRef"]);
    return (react_1.default.createElement(Container_1.Container, { style: { position: 'relative', overflow: 'hidden', height: props.height }, className: classnames_1.default('video-background', p.className) },
        react_1.default.createElement(Container_1.Container, __assign({}, props, { className: "video-background__text", style: __assign({ position: 'absolute', zIndex: 2, top: 0, width: '100%', height: props.height }, props.style) }), p.children),
        react_1.default.createElement("video", { className: "video-background__video", style: {
                position: 'absolute',
                zIndex: 1,
                objectFit: 'cover',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                height: props.height,
                width: props.width,
            }, autoPlay: true, muted: true, src: src, ref: useRef })));
};
exports.VideoBackground = VideoBackground;
