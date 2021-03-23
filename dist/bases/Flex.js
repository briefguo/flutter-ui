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
exports.Flex = exports.FlexProps = void 0;
var Layout_1 = require("./Layout");
var createRSC_1 = require("../helpers/createRSC");
var react_1 = __importDefault(require("react"));
var createOf_1 = require("../helpers/createOf");
var FlexProps = /** @class */ (function (_super) {
    __extends(FlexProps, _super);
    function FlexProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        createRSC_1.Style.As('alignItems'),
        __metadata("design:type", String)
    ], FlexProps.prototype, "align", void 0);
    __decorate([
        createRSC_1.Style.As('justifyContent'),
        __metadata("design:type", String)
    ], FlexProps.prototype, "justify", void 0);
    __decorate([
        createRSC_1.Style.As('flexWrap'),
        __metadata("design:type", String)
    ], FlexProps.prototype, "wrap", void 0);
    __decorate([
        createRSC_1.Style.Calc(function (expanded) { return ({
            height: expanded ? '100%' : undefined,
            flex: expanded ? '1 1 auto' : undefined,
        }); }),
        __metadata("design:type", Boolean)
    ], FlexProps.prototype, "expanded", void 0);
    __decorate([
        createRSC_1.Style.Calc(function (inline) { return ({ display: inline ? 'inline-flex' : 'flex' }); }),
        __metadata("design:type", Boolean)
    ], FlexProps.prototype, "inline", void 0);
    __decorate([
        createRSC_1.Style.As('flexDirection'),
        __metadata("design:type", String)
    ], FlexProps.prototype, "direction", void 0);
    __decorate([
        createRSC_1.Style.Calc(Layout_1.mapLayoutPropsToCSS),
        __metadata("design:type", String)
    ], FlexProps.prototype, "layout", void 0);
    return FlexProps;
}(createRSC_1.RSCProps));
exports.FlexProps = FlexProps;
var Flex = function (p) {
    return react_1.default.createElement('div', FlexProps.of(p));
};
exports.Flex = Flex;
exports.Flex.of = createOf_1.createOf(exports.Flex);
