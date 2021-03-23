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
exports.Layout = exports.LayoutProps = exports.mapLayoutPropsToCSS = void 0;
var react_1 = __importDefault(require("react"));
var createOf_1 = require("../helpers/createOf");
var createRSC_1 = require("../helpers/createRSC");
var layouts = {
    center: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    topCenter: {
        textAlign: 'center',
        alignItems: 'center',
    },
    leftBottom: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    rightTop: {
        alignItems: 'flex-end',
    },
    rightBottom: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    leftCenter: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    rightCenter: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
};
var mapLayoutPropsToCSS = function (layout) {
    var layoutProps;
    if (Object.keys(layouts).includes(layout)) {
        layoutProps = layouts[layout];
    }
    else {
        layoutProps = layout;
    }
    return __assign({}, layoutProps);
};
exports.mapLayoutPropsToCSS = mapLayoutPropsToCSS;
var LayoutProps = /** @class */ (function (_super) {
    __extends(LayoutProps, _super);
    function LayoutProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        createRSC_1.Style.Calc(function (alignment) { return (__assign({ display: 'flex', flexDirection: 'column', flex: '1 1 auto', height: '100%' }, exports.mapLayoutPropsToCSS(alignment))); }),
        __metadata("design:type", String)
    ], LayoutProps.prototype, "alignment", void 0);
    return LayoutProps;
}(createRSC_1.RSCProps));
exports.LayoutProps = LayoutProps;
var Layout = function (p) {
    return react_1.default.createElement('div', LayoutProps.of(p));
};
exports.Layout = Layout;
exports.Layout.of = createOf_1.createOf(exports.Layout);
