"use strict";
exports.__esModule = true;
exports.mergeRsProps = exports.pickProps = exports.normalizeRsProps = void 0;
var normalizeRsProps = function (p) {
    var obj = { lg: null, xs: null };
    if ((p === null || p === void 0 ? void 0 : p.lg) && (p === null || p === void 0 ? void 0 : p.xs)) {
        obj.lg = p;
        obj.xs = p;
    }
    return obj;
};
exports.normalizeRsProps = normalizeRsProps;
var pickProps = function (entity, keys, breakPoint) {
    var obj = {};
    Object.keys(entity)
        .filter(function (k) { return keys.includes(k); })
        .forEach(function (k) {
        var _a, _b;
        obj[k] = (_b = (_a = entity[k]) === null || _a === void 0 ? void 0 : _a[breakPoint]) !== null && _b !== void 0 ? _b : entity[k];
    });
    return obj;
};
exports.pickProps = pickProps;
var mergeRsProps = function (props1, props2) {
    if (props1 === void 0) { props1 = {}; }
    if (props2 === void 0) { props2 = {}; }
    var targetObject = {};
    var mergedKeys = Object.keys(props1).concat(Object.keys(props2));
    var uniqArr = new Set(mergedKeys);
    uniqArr.forEach(function (key) {
        var _a, _b, _c, _d, _e, _f;
        targetObject[key] = {
            lg: (_c = (_b = (_a = props2 === null || props2 === void 0 ? void 0 : props2.lg) !== null && _a !== void 0 ? _a : props1 === null || props1 === void 0 ? void 0 : props1.lg) !== null && _b !== void 0 ? _b : props2) !== null && _c !== void 0 ? _c : props1,
            xs: (_f = (_e = (_d = props2 === null || props2 === void 0 ? void 0 : props2.xs) !== null && _d !== void 0 ? _d : props1 === null || props1 === void 0 ? void 0 : props1.xs) !== null && _e !== void 0 ? _e : props2) !== null && _f !== void 0 ? _f : props1
        };
    });
    return targetObject;
};
exports.mergeRsProps = mergeRsProps;
