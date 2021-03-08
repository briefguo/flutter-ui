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
exports.__esModule = true;
exports.Space = exports.SingleSpace = void 0;
var react_1 = __importStar(require("react"));
var createSingle_1 = require("../helpers/createSingle");
var SpaceItem = createSingle_1.singleOf('div', {
    defaultProps: {
        direction: undefined,
        box: undefined,
        align: undefined,
        size: undefined
    },
    selector: '.s-space__item-[uuid]',
    props2CSSProperties: function (p) {
        switch (p.direction) {
            case 'vertical':
                return {
                    marginTop: p.size / 2,
                    marginBottom: p.size / 2
                };
            case 'horizen':
            default:
                return {
                    flex: p.box === 'flex' ? '1 1' : undefined,
                    marginLeft: p.size / 2,
                    marginRight: p.size / 2
                };
        }
    }
});
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
// https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap
exports.SingleSpace = createSingle_1.singleOf('div', {
    defaultProps: {
        direction: 'horizen',
        box: 'inline-flex',
        align: undefined,
        size: undefined,
        children: undefined,
        style: undefined
    },
    selector: '.s-space-[uuid]',
    props2CSSProperties: function (p) {
        switch (p.direction) {
            case 'vertical':
                return {
                    display: p.box,
                    flexDirection: 'column',
                    alignItems: p.align,
                    marginTop: -p.size / 2,
                    marginBottom: -p.size / 2
                };
            case 'horizen':
            default:
                return {
                    display: p.box,
                    alignItems: p.align,
                    marginLeft: -p.size / 2,
                    marginRight: -p.size / 2
                };
        }
    },
    renderChildren: function (p) {
        // eslint-disable-next-line react/no-children-prop
        return react_1["default"].createElement(react_1.Fragment, {
            children: p.children.map(function (child, index) {
                // eslint-disable-next-line react/no-children-prop
                return react_1["default"].createElement(SpaceItem, __assign(__assign({}, p), { key: index, children: child }));
            })
        });
    }
});
exports.Space = exports.SingleSpace;
