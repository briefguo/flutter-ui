"use strict";
exports.__esModule = true;
exports.Text = exports.SingleText = void 0;
var createSingle_1 = require("../helpers/createSingle");
exports.SingleText = createSingle_1.singleOf('span', {
    defaultProps: {
        fontSize: undefined,
        color: undefined,
        contrastingColor: undefined,
        fontWeight: undefined,
        textAlign: undefined,
        whiteSpace: undefined
    },
    selector: '.s-text-[uuid]',
    props2CSSProperties: function (p) {
        var _a;
        return ({
            fontSize: p.fontSize,
            color: (_a = p.contrastingColor) !== null && _a !== void 0 ? _a : p.color,
            textAlign: p.textAlign,
            whiteSpace: p.whiteSpace,
            fontWeight: p.fontWeight
        });
    }
});
exports.Text = exports.SingleText;
