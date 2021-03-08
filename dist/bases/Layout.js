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
exports.__esModule = true;
exports.Layout = exports.SingleLayout = exports.mapLayoutPropsToCSS = void 0;
var createSingle_1 = require("../helpers/createSingle");
var layouts = {
    center: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    leftBottom: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    rightTop: {
        alignItems: 'flex-end'
    },
    rightBottom: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    leftCenter: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    rightCenter: {
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
};
var mapLayoutPropsToCSS = function (layout) {
    var layoutProps;
    if (Object.keys(layouts).includes(layout)) {
        layoutProps = layouts[layout];
    }
    else {
        layoutProps = layout;
    }
    return layoutProps;
};
exports.mapLayoutPropsToCSS = mapLayoutPropsToCSS;
exports.SingleLayout = createSingle_1.singleOf('div', {
    defaultProps: {
        alignment: undefined
    },
    selector: '.s-layout-[uuid]',
    props2CSSProperties: function (p) { return (__assign({ display: 'flex', flexDirection: 'column', flex: '1 1 auto', height: '100%' }, exports.mapLayoutPropsToCSS(p.alignment))); }
});
exports.Layout = exports.SingleLayout;
