"use strict";
exports.__esModule = true;
exports.Background = exports.SingleBackground = void 0;
var Container_1 = require("../bases/Container");
var createSingle_1 = require("../helpers/createSingle");
var src2Background = function (src) {
    return src ? "center/cover url(" + src + ")" : undefined;
};
exports.SingleBackground = createSingle_1.singleOf(Container_1.SingleContainer, {
    defaultProps: {
        contrastingColor: '#fff',
        src: ''
    },
    selector: '.s-background-[uuid]',
    props2CSSProperties: function (p) {
        var _a;
        return ({
            background: (_a = p.background) !== null && _a !== void 0 ? _a : src2Background(p.src)
        });
    }
});
exports.Background = exports.SingleBackground;
