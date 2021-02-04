"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PageScaffold = void 0;
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var PageScaffold = function (props) {
    react_1.useEffect(function () {
        if (props.portal) {
            var portalContainer = document.createElement('div');
            document.body.appendChild(portalContainer);
            react_dom_1["default"].render(props.portal, portalContainer);
        }
    }, [props.portal]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("style", null, "body { background: " + props.backgroundColor + "; color: " + props.contrastingColor + "; }"),
        react_1["default"].createElement("main", { className: props.className }, props.child || props.children)));
};
exports.PageScaffold = PageScaffold;
