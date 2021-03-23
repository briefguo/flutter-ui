"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Center = exports.SingleCenter = exports.SingleColumn = exports.SingleFlex = exports.SingleLayout = exports.SingleText = exports.SingleBackground = exports.SizedBox = exports.SingleContainer = void 0;
var Background_1 = require("./bases/Background");
var Container_1 = require("./bases/Container");
var Text_1 = require("./bases/Text");
var Flex_1 = require("./bases/Flex");
var Layout_1 = require("./bases/Layout");
exports.SingleContainer = Container_1.Container;
exports.SizedBox = exports.SingleContainer;
exports.SingleBackground = Background_1.Background;
exports.SingleText = Text_1.Text;
exports.SingleLayout = Layout_1.Layout;
exports.SingleFlex = Flex_1.Flex;
exports.SingleColumn = Flex_1.Flex.of({ direction: 'column' });
exports.SingleCenter = Flex_1.Flex.of({
    direction: 'column',
    layout: 'center',
});
exports.Center = exports.SingleCenter;
