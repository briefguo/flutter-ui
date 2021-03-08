"use strict";
exports.__esModule = true;
exports.Img = exports.SingleImage = void 0;
var createSingle_1 = require("../helpers/createSingle");
// TODO: 添加borderd
exports.SingleImage = createSingle_1.singleOf('img', {
    defaultProps: {
        width: '100%',
        src: undefined,
        bordered: undefined,
        style: undefined
    },
    selector: '.s-img-[uuid]',
    props2CSSProperties: function (p) { return ({
        width: p.width
    }); }
});
exports.Img = exports.SingleImage;
