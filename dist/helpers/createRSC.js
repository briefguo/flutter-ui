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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RSCProps = void 0;
var classnames_1 = __importDefault(require("classnames"));
var RSStyleSheet_1 = require("./RSStyleSheet");
var Native_1 = require("../decorators/Native");
var Style_1 = require("../decorators/Style");
__exportStar(require("../decorators/Style"), exports);
__exportStar(require("../decorators/Native"), exports);
// TODO: 调试
// import ReactDOM from 'react-dom'
// import { ScreenDebug } from '../debug/ScreenDebug'
var RSCProps = /** @class */ (function () {
    function RSCProps() {
    }
    RSCProps.resolveDecoratedStyleProps = function (p, k) {
        Style_1.Style.As.resolve(p, k);
        Style_1.Style.Calc.resolve(p, k);
        Style_1.Style.Map.resolve(p, k);
    };
    RSCProps.pickByBreakpoint = function (p, breakpoint) {
        var _this = this;
        var rsPropsKeys = Object.keys(p);
        var singleProps = new this();
        rsPropsKeys
            .filter(function (k) { return !_this.commonProps.includes(k); })
            .forEach(function (k) {
            var _a;
            if (_this.isRSProperty(p[k])) {
                singleProps[k] = (_a = p[k]) === null || _a === void 0 ? void 0 : _a[breakpoint];
            }
            else {
                singleProps[k] = p[k];
            }
        });
        return singleProps;
    };
    Object.defineProperty(RSCProps, "identitor", {
        get: function () {
            return this.name.replace('Props', '').toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RSCProps, "selector", {
        get: function () {
            return ".rs-" + this.identitor + "-[uuid]";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RSCProps, "commonProps", {
        get: function () {
            return ['lg', 'xs'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RSCProps, "commonReactProps", {
        get: function () {
            return ['style', 'className', 'children', 'data-screen'];
        },
        enumerable: false,
        configurable: true
    });
    RSCProps.props2Style = function (p) {
        var _this = this;
        Object.keys(p).forEach(function (k) { return _this.resolveDecoratedStyleProps(p, k); });
        return p;
    };
    RSCProps.collectNativeProps = function (p) {
        var _this = this;
        // 获取实例上的所有成员
        var nativeProps = {};
        var rsPropsKeys = Object.keys(p);
        rsPropsKeys.forEach(function (k) {
            var _a;
            if (_this.commonReactProps.includes(k)) {
                nativeProps = Object.assign(nativeProps, (_a = {}, _a[k] = p[k], _a));
            }
            if (Native_1.Native.As.decorated(p, k)) {
                nativeProps = Object.assign(nativeProps, Native_1.Native.As.resolve(p, k));
            }
            if (Native_1.Native.Data.decorated(p, k)) {
                nativeProps = Object.assign(nativeProps, Native_1.Native.Data.resolve(p, k));
            }
        });
        return nativeProps;
    };
    RSCProps.of = function (p) {
        // Props类实例化
        var instance = new this();
        // 合并实例上默认参数和传入参数
        var mergedProps = Object.assign(instance, p);
        // 收集原生props
        var nativeProps = this.collectNativeProps(mergedProps);
        // 排除原生props，用于处理style
        var styleProps = this._omit(mergedProps, Object.keys(nativeProps));
        var lgProps = this.pickByBreakpoint(styleProps, 'lg');
        var xsProps = this.pickByBreakpoint(styleProps, 'xs');
        var className = RSStyleSheet_1.RSStyleSheet.createStyle(this.selector, {
            lg: __assign(__assign({}, this.props2Style(lgProps)), lgProps.style),
            xs: __assign(__assign({}, this.props2Style(xsProps)), xsProps.style),
        }).className;
        return __assign(__assign({}, nativeProps), { className: classnames_1.default(className, p.className, {
                lg: p.lg,
                xs: p.xs,
            }), children: p.children });
    };
    RSCProps.getCurrentProperty = function (p) {
        if (RSCProps.isRSProperty(p)) {
            if (RSStyleSheet_1.RSStyleSheet.breakpoint) {
                return p[RSStyleSheet_1.RSStyleSheet.breakpoint];
            }
        }
        else {
            return p;
        }
    };
    RSCProps.isRSProperty = function (rs) { return (rs === null || rs === void 0 ? void 0 : rs.lg) || (rs === null || rs === void 0 ? void 0 : rs.xs); };
    RSCProps._omit = function (obj, keys) {
        if (obj === void 0) { obj = {}; }
        if (keys === void 0) { keys = []; }
        Object.keys(obj)
            .filter(function (k) { return keys.includes(k); })
            .forEach(function (k) {
            delete obj[k];
        });
        return obj;
    };
    return RSCProps;
}());
exports.RSCProps = RSCProps;
