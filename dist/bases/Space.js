"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Space = exports.SpaceProps = void 0;
var react_1 = __importDefault(require("react"));
var createRSC_1 = require("../helpers/createRSC");
var props2CSSProperties = function (p) {
    var _a;
    var size = (_a = p.size) !== null && _a !== void 0 ? _a : 0;
    switch (p.direction) {
        case 'vertical':
            return {
                marginTop: size / 2,
                marginBottom: size / 2,
            };
        case 'horizen':
        default:
            return {
                marginLeft: size / 2,
                marginRight: size / 2,
            };
    }
};
var SpaceItemProps = /** @class */ (function (_super) {
    __extends(SpaceItemProps, _super);
    function SpaceItemProps() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.direction = 'horizen';
        _this.box = 'inline-flex';
        _this.size = 0;
        return _this;
    }
    __decorate([
        createRSC_1.Style.Calc(function (direction) { return ({
            flexDirection: direction === 'vertical' ? 'column' : 'row',
        }); }),
        __metadata("design:type", String)
    ], SpaceItemProps.prototype, "direction", void 0);
    __decorate([
        createRSC_1.Style.Calc(function (box) { return ({ display: box }); }),
        __metadata("design:type", String)
    ], SpaceItemProps.prototype, "box", void 0);
    __decorate([
        createRSC_1.Style.As('alignItems'),
        __metadata("design:type", String)
    ], SpaceItemProps.prototype, "align", void 0);
    __decorate([
        createRSC_1.Style.Map(props2CSSProperties),
        __metadata("design:type", Number)
    ], SpaceItemProps.prototype, "size", void 0);
    return SpaceItemProps;
}(createRSC_1.RSCProps));
var SpaceItem = function (p) {
    return react_1.default.createElement('div', SpaceItemProps.of(p));
};
// // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
// // https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap
var calcSpaceStyle = function (p) {
    var _a;
    var size = (_a = p.size) !== null && _a !== void 0 ? _a : 0;
    switch (p.direction) {
        case 'vertical':
            return {
                marginTop: -size / 2,
                marginBottom: -size / 2,
            };
        case 'horizen':
        default:
            return {
                marginLeft: -size / 2,
                marginRight: -size / 2,
            };
    }
};
var SpaceProps = /** @class */ (function (_super) {
    __extends(SpaceProps, _super);
    function SpaceProps() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.direction = 'horizen';
        _this.box = 'inline-flex';
        _this.size = 0;
        return _this;
    }
    __decorate([
        createRSC_1.Style.Calc(function (direction) { return ({
            flexDirection: direction === 'vertical' ? 'column' : 'row',
        }); }),
        __metadata("design:type", String)
    ], SpaceProps.prototype, "direction", void 0);
    __decorate([
        createRSC_1.Style.Calc(function (box) { return ({ display: box }); }),
        __metadata("design:type", String)
    ], SpaceProps.prototype, "box", void 0);
    __decorate([
        createRSC_1.Style.As('alignItems'),
        __metadata("design:type", String)
    ], SpaceProps.prototype, "align", void 0);
    __decorate([
        createRSC_1.Style.Map(calcSpaceStyle),
        __metadata("design:type", Number)
    ], SpaceProps.prototype, "size", void 0);
    return SpaceProps;
}(createRSC_1.RSCProps));
exports.SpaceProps = SpaceProps;
var SpaceContainer = function (p) {
    return react_1.default.createElement('div', SpaceProps.of(p));
};
var Space = function (p) {
    var _a;
    return (react_1.default.createElement(SpaceContainer, __assign({}, p), (_a = p.children) === null || _a === void 0 ? void 0 : _a.map(function (item, index) { return (react_1.default.createElement(SpaceItem, __assign({}, p, { key: index }), item)); })));
};
exports.Space = Space;
