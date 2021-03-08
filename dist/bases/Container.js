"use strict";
exports.__esModule = true;
exports.SizedBox = exports.Container = exports.SingleContainer = void 0;
var createSingle_1 = require("../helpers/createSingle");
var defaultProps = {
    contrastingColor: undefined,
    background: undefined,
    padding: undefined,
    margin: undefined,
    height: undefined,
    width: undefined,
    borderRadius: undefined,
    border: undefined,
    cursor: undefined,
    textAlign: undefined,
    children: undefined
};
exports.SingleContainer = createSingle_1.singleOf('div', {
    defaultProps: defaultProps,
    selector: '.s-container-[uuid]',
    props2CSSProperties: function (p) { return ({
        color: p.contrastingColor,
        background: p.background,
        padding: p.padding,
        margin: p.margin,
        height: p.height,
        width: p.width,
        borderRadius: p.borderRadius,
        border: p.border,
        cursor: p.cursor,
        textAlign: p.textAlign
    }); }
});
exports.Container = exports.SingleContainer;
exports.SizedBox = exports.SingleContainer;
