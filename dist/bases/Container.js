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
exports.Container = exports.ContainerProps = void 0;
var react_1 = __importDefault(require("react"));
var createOf_1 = require("../helpers/createOf");
var createRSC_1 = require("../helpers/createRSC");
var ContainerProps = /** @class */ (function (_super) {
    __extends(ContainerProps, _super);
    function ContainerProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        createRSC_1.Style.As('color'),
        __metadata("design:type", String)
    ], ContainerProps.prototype, "contrastingColor", void 0);
    return ContainerProps;
}(createRSC_1.RSCProps));
exports.ContainerProps = ContainerProps;
var Container = function (p) {
    return react_1.default.createElement('div', ContainerProps.of(p));
};
exports.Container = Container;
exports.Container.of = createOf_1.createOf(exports.Container);
