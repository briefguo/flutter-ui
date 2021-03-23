"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.properDecoratorOf = void 0;
require("reflect-metadata");
function properDecoratorOf(id, fn) {
    var symbolId = Symbol(id);
    var ProperDecorator = function (arg) {
        return Reflect.metadata(symbolId, arg);
    };
    ProperDecorator.get = function (instance, key) {
        return Reflect.getMetadata(symbolId, instance, key);
    };
    ProperDecorator.decorated = function (instance, key) {
        return !!ProperDecorator.get(instance, key);
    };
    ProperDecorator.resolve = function (instance, key) {
        var decorator = ProperDecorator.get(instance, key);
        if (decorator) {
            return fn === null || fn === void 0 ? void 0 : fn(instance, key, decorator);
        }
        else {
            return instance[key];
        }
    };
    return ProperDecorator;
}
exports.properDecoratorOf = properDecoratorOf;
