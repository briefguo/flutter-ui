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
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderComponent = void 0;
var react_dom_1 = __importDefault(require("react-dom"));
var react_1 = __importDefault(require("react"));
function renderComponent(C, props) {
    return new Promise(function (resolve) {
        var container = document.createElement('div');
        document.body.appendChild(container);
        var unmount = function () { return react_dom_1.default.unmountComponentAtNode(container); };
        var onComplete = function (V) {
            resolve(V);
            unmount();
        };
        react_dom_1.default.render(react_1.default.createElement(C, __assign({ onClose: unmount, onComplete: onComplete }, props)), container);
    });
}
exports.renderComponent = renderComponent;
