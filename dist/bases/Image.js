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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Img = exports.Image = exports.ImageProps = void 0;
var react_1 = __importStar(require("react"));
var createOf_1 = require("../helpers/createOf");
var createRSC_1 = require("../helpers/createRSC");
var useWindowScroll_1 = require("../helpers/useWindowScroll");
var ImageProps = /** @class */ (function (_super) {
    __extends(ImageProps, _super);
    function ImageProps() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = '100%';
        _this.height = '';
        return _this;
    }
    __decorate([
        createRSC_1.Native.Data(function (breakpoint) { return "data-" + breakpoint + "-src"; }),
        __metadata("design:type", String)
    ], ImageProps.prototype, "src", void 0);
    return ImageProps;
}(createRSC_1.RSCProps));
exports.ImageProps = ImageProps;
var Image = function (p) {
    var imgRef = react_1.default.createRef();
    var y = useWindowScroll_1.useWindowScroll().y;
    react_1.useEffect(function () {
        var elem = imgRef.current;
        var rect = elem === null || elem === void 0 ? void 0 : elem.getBoundingClientRect(); // 出现在视野的时候加载图片
        if ((rect === null || rect === void 0 ? void 0 : rect.top) && (rect === null || rect === void 0 ? void 0 : rect.top) < window.innerHeight) {
            var src = createRSC_1.RSCProps.getCurrentProperty(p.src);
            // 未加载图片时加载
            src && (elem === null || elem === void 0 ? void 0 : elem.setAttribute('src', src));
        }
    }, [y, p.src, imgRef]);
    return react_1.default.createElement("img", __assign({ ref: imgRef }, ImageProps.of(p), { alt: "" }));
};
exports.Image = Image;
exports.Image.of = createOf_1.createOf(exports.Image);
exports.Img = exports.Image;
