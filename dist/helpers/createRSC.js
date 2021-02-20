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
exports.createRSC = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var deprecated_1 = require("../deprecated");
var _pickProps = function (option) {
    var obj = {};
    Object.keys(option.entity)
        .filter(function (k) { return option.keys.includes(k); })
        .forEach(function (k) {
        var _a, _b;
        // 取断点值，不存在时取共用值为断点值
        obj[k] = (_b = (_a = option.entity[k]) === null || _a === void 0 ? void 0 : _a[option.breakPoint]) !== null && _b !== void 0 ? _b : option.entity[k];
    });
    return obj;
};
var createRSC = function (C) {
    return function (props) {
        var lgProps = _pickProps({
            entity: props,
            breakPoint: 'lg',
            keys: Object.keys(props)
        });
        var xsProps = _pickProps({
            entity: props,
            breakPoint: 'xs',
            keys: Object.keys(props)
        });
        // TODO: 待优化实现
        var _a = deprecated_1.useDevices(), isDefault = _a.isDefault, isMobile = _a.isMobile;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            isDefault && (react_1["default"].createElement(C, __assign({}, lgProps, { className: classnames_1["default"](lgProps.className, 'lg') }), props.children)),
            isMobile && (react_1["default"].createElement(C, __assign({}, xsProps, { className: classnames_1["default"](xsProps.className, 'xs') }), props.children))));
    };
};
exports.createRSC = createRSC;
