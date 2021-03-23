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
exports.Background = exports.BackgroundProps = void 0;
var react_1 = __importDefault(require("react"));
var createOf_1 = require("../helpers/createOf");
var createRSC_1 = require("../helpers/createRSC");
var Container_1 = require("./Container");
var BackgroundProps = /** @class */ (function (_super) {
    __extends(BackgroundProps, _super);
    function BackgroundProps() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contrastingColor = '#fff';
        return _this;
    }
    // TODO: src和backround互斥提示
    // TODO: 添加backgroundColor
    BackgroundProps.p2Background = function (p) {
        var _a;
        return ({
            background: (_a = p.background) !== null && _a !== void 0 ? _a : BackgroundProps.url2Background(p.src),
        });
    };
    BackgroundProps.url2Background = function (src) {
        return src ? "center/cover url(" + src + ")" : undefined;
    };
    __decorate([
        createRSC_1.Style.As('color'),
        __metadata("design:type", String)
    ], BackgroundProps.prototype, "contrastingColor", void 0);
    __decorate([
        createRSC_1.Style.Map(function (p) { return BackgroundProps.p2Background(p); }),
        __metadata("design:type", String)
    ], BackgroundProps.prototype, "src", void 0);
    return BackgroundProps;
}(Container_1.ContainerProps));
exports.BackgroundProps = BackgroundProps;
var Background = function (p) {
    return react_1.default.createElement('div', BackgroundProps.of(p));
};
exports.Background = Background;
exports.Background.of = createOf_1.createOf(exports.Background);
