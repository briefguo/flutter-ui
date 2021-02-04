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
exports.__esModule = true;
exports.ResponsiveFlex = exports.mapLayoutPropsToFlexProps = exports.Center = exports.SingleCenter = exports.SingleColumn = exports.Flex = exports.SingleFlex = void 0;
var react_1 = __importDefault(require("react"));
var _rsUtil_1 = require("./_rsUtil");
var Container_1 = require("./Container");
var propsKeys = [
    'align',
    'gutter',
    'justify',
    'wrap',
    'expanded',
    'inline',
    'direction',
    'layout',
    'style',
];
var mapPropsToStyle = function (p) { return (__assign({ display: p.inline ? 'inline-flex' : 'flex', alignItems: p.align, justifyContent: p.justify, flexWrap: p.wrap, height: p.expanded ? '100%' : undefined, flex: p.expanded ? '1 1 auto' : undefined, flexDirection: p.direction }, p.style)); };
var SingleFlex = function (props) {
    return (react_1["default"].createElement(Container_1.SingleContainer, { className: props.className, style: mapPropsToStyle(__assign(__assign({}, props), exports.mapLayoutPropsToFlexProps(props.layout))) }, props.children));
};
exports.SingleFlex = SingleFlex;
exports.Flex = exports.SingleFlex;
var SingleColumn = function (props) {
    return (react_1["default"].createElement(exports.SingleFlex, __assign({ direction: "column" }, props), props.children));
};
exports.SingleColumn = SingleColumn;
var SingleCenter = function (props) {
    return (react_1["default"].createElement(exports.SingleColumn, __assign({ align: "center", justify: "center" }, props, { style: __assign({ textAlign: 'center' }, props.style) }), props.children));
};
exports.SingleCenter = SingleCenter;
exports.Center = exports.SingleFlex;
var layouts = {
    // TODO:
    center: {
        justify: 'center',
        expanded: true,
        style: {
            textAlign: 'center'
        }
    },
    leftBottom: {
        direction: 'column',
        justify: 'flex-end',
        expanded: true
    },
    rightTop: {
        direction: 'column',
        align: 'flex-end',
        expanded: true
    },
    rightBottom: {
        direction: 'column',
        justify: 'flex-end',
        align: 'flex-end',
        expanded: true
    },
    leftTop: {
        direction: 'column',
        align: 'flex-start',
        expanded: true
    },
    leftCenter: {
        direction: 'column',
        expanded: true,
        justify: 'center'
    },
    rightCenter: {
        direction: 'column',
        expanded: true,
        justify: 'center',
        align: 'flex-end'
    }
};
var mapLayoutPropsToFlexProps = function (layout) {
    var layoutProps;
    if (Object.keys(layouts).includes(layout)) {
        layoutProps = layouts[layout];
    }
    else {
        layoutProps = layout;
    }
    return layoutProps;
};
exports.mapLayoutPropsToFlexProps = mapLayoutPropsToFlexProps;
var ResponsiveFlex = function (props) {
    var lgFlexProps = _rsUtil_1.pickProps(props, propsKeys, 'lg');
    var xsFlexProps = _rsUtil_1.pickProps(props, propsKeys, 'xs');
    return (react_1["default"].createElement(Container_1.ResponsiveContainer, { style: {
            lg: mapPropsToStyle(__assign(__assign({}, exports.mapLayoutPropsToFlexProps(lgFlexProps.layout)), lgFlexProps)),
            xs: mapPropsToStyle(__assign(__assign({}, exports.mapLayoutPropsToFlexProps(xsFlexProps.layout)), xsFlexProps))
        } }, props.children));
};
exports.ResponsiveFlex = ResponsiveFlex;
