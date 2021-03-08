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
exports.Flex = exports.Center = exports.SingleCenter = exports.SingleColumn = exports.SingleFlex = void 0;
var Layout_1 = require("./Layout");
var createSingle_1 = require("../helpers/createSingle");
exports.SingleFlex = createSingle_1.singleOf('div', {
    defaultProps: {
        align: undefined,
        justify: undefined,
        wrap: undefined,
        expanded: undefined,
        inline: undefined,
        direction: undefined,
        layout: undefined
    },
    selector: '.s-flex-[uuid]',
    props2CSSProperties: function (p) { return (__assign({ display: p.inline ? 'inline-flex' : 'flex', justifyContent: p.justify, flexWrap: p.wrap, height: p.expanded ? '100%' : undefined, flex: p.expanded ? '1 1 auto' : undefined, flexDirection: p.direction, alignItems: p.align }, Layout_1.mapLayoutPropsToCSS(p.layout))); }
});
exports.SingleColumn = exports.SingleFlex.of({ direction: 'column' });
exports.SingleCenter = exports.SingleFlex.of({
    direction: 'column',
    layout: 'center'
});
exports.Center = exports.SingleCenter;
exports.Flex = exports.SingleFlex;
