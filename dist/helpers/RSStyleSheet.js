"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RSStyleSheet = void 0;
var react_1 = __importDefault(require("react"));
var server_1 = __importDefault(require("react-dom/server"));
var md5_1 = __importDefault(require("md5"));
var CSSStyleDeclaration2InlineCSSText_1 = require("./CSSStyleDeclaration2InlineCSSText");
var uuidCache = [];
var xsCssCache = [];
var lgCssCache = [];
var clientCache = [];
var mobileBreakpoint = 'max-width: 767px';
var pcBreakpoint = 'min-width: 768px';
var isMobile = "@media screen and (" + mobileBreakpoint + ")";
// const isDesktop = '@media screen and (min-width: 992px)'
// const isNotMobile = '@media screen and (min-width: 768px)'
var isDefault = "@media screen and (" + pcBreakpoint + ")";
var RSStyleSheet = /** @class */ (function () {
    function RSStyleSheet() {
    }
    Object.defineProperty(RSStyleSheet, "breakpoint", {
        get: function () {
            if (typeof window === 'undefined') {
                return '';
            }
            if (RSStyleSheet._isDefault()) {
                return 'lg';
            }
            if (RSStyleSheet._isMobile()) {
                return 'xs';
            }
        },
        enumerable: false,
        configurable: true
    });
    RSStyleSheet.createStyle = function (selector, css) {
        var _a;
        var lg = css.lg, xs = css.xs;
        var uuid = md5_1.default(JSON.stringify({ selector: selector, css: css })).slice(0, 8);
        var targetSelector = selector === null || selector === void 0 ? void 0 : selector.replace('[uuid]', uuid);
        var lgCss = targetSelector + " { " + CSSStyleDeclaration2InlineCSSText_1.CSSStyleDeclaration2InlineCSSText(lg) + " }";
        var xsCss = targetSelector + " { " + CSSStyleDeclaration2InlineCSSText_1.CSSStyleDeclaration2InlineCSSText(xs) + " }";
        var targetClassName = targetSelector === null || targetSelector === void 0 ? void 0 : targetSelector.replace(/^./, '');
        if (uuidCache.includes(uuid)) {
            // document.getElementById(id).remove()
            // document.head.appendChild(styleTag)
        }
        else {
            uuidCache.push(uuid);
            lgCssCache.push(lgCss);
            xsCssCache.push(xsCss);
        }
        if (typeof window !== 'undefined') {
            var serverStyle = document.querySelectorAll('style[data-power-by="flutter-ui"]')[0];
            // 服务端没渲染出来的样式(客户端需要请求接口后渲染的)，客户端主动添加
            if (!((_a = serverStyle.textContent) === null || _a === void 0 ? void 0 : _a.includes(targetClassName))) {
                if (clientCache.includes(targetClassName)) {
                    //
                }
                else {
                    var styleTag = document.createElement('style');
                    styleTag.setAttribute('data-power-by', 'flutter-ui-client');
                    styleTag.setAttribute('data-id', targetClassName);
                    styleTag.textContent = "\n            " + isMobile + " { " + xsCss + " }\n            " + isDefault + " { " + lgCss + " }\n          ";
                    document.head.appendChild(styleTag);
                    clientCache.push(targetClassName);
                }
            }
        }
        return { className: targetClassName };
    };
    RSStyleSheet.prototype.collectStyles = function (a) {
        server_1.default.renderToStaticMarkup(a);
        // console.log(ReactDOM.renderToStaticMarkup(a))
        // console.log(cssCache)
        return a;
    };
    RSStyleSheet.prototype.getStyleText = function () {
        var lgCssText = lgCssCache.join('\n');
        var xsCssText = xsCssCache.join('\n');
        var cssText = "\n      " + isMobile + " { " + xsCssText + " }\n      " + isDefault + " { " + lgCssText + " }\n    ";
        return cssText;
    };
    RSStyleSheet.prototype.getStyleElement = function () {
        // console.log(ReactDOM.renderToStaticMarkup(a))
        // console.log(cssCache)
        var cssText = this.getStyleText();
        return react_1.default.createElement("style", { "data-power-by": "flutter-ui" }, cssText);
    };
    RSStyleSheet._isMobile = function () { return window.matchMedia(mobileBreakpoint).matches; };
    RSStyleSheet._isDefault = function () { return window.matchMedia(pcBreakpoint).matches; };
    return RSStyleSheet;
}());
exports.RSStyleSheet = RSStyleSheet;
