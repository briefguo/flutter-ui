"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
var properDecoratorOf_1 = require("./properDecoratorOf");
var As = properDecoratorOf_1.properDecoratorOf('as', function (ins, key, trueKey) {
    ins[trueKey] = ins[key];
    // 改名后，去掉源值
    delete ins[key];
});
var Calc = properDecoratorOf_1.properDecoratorOf('calc', function (ins, key, calc) {
    ins = Object.assign(ins, calc(ins[key]));
    delete ins[key];
});
var Map = properDecoratorOf_1.properDecoratorOf('map', function (ins, key, mapper) {
    ins = Object.assign(ins, mapper(ins));
    delete ins[key];
});
exports.Style = { As: As, Calc: Calc, Map: Map };
