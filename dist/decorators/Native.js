"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Native = exports.Data = exports.As = void 0;
var properDecoratorOf_1 = require("./properDecoratorOf");
exports.As = properDecoratorOf_1.properDecoratorOf('native-as', function (ins, key, as) {
    var _a;
    var t = ins[key];
    // 改名后，去掉源值
    delete ins[key];
    return _a = {}, _a[as] = t, _a;
});
exports.Data = properDecoratorOf_1.properDecoratorOf('data', function (ins, key, mapper) {
    var _a;
    var lgKey = mapper('lg');
    var xsKey = mapper('xs');
    var t = ins[key];
    // 改名后，去掉源值
    delete ins[key];
    return _a = {}, _a[lgKey] = t['lg'], _a[xsKey] = t['xs'], _a;
});
exports.Native = { As: exports.As, Data: exports.Data };
