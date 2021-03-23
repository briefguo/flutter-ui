"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RS = exports.Content = exports.ResponsiveContent = exports.ResponsiveBackground = exports.ResponsiveImage = exports.ResponsiveLayout = exports.ResponsiveText = exports.ResponsiveFlex = exports.ResponsiveContainer = void 0;
var Container_1 = require("../bases/Container");
var Text_1 = require("../bases/Text");
var Layout_1 = require("../bases/Layout");
var Background_1 = require("../bases/Background");
var Flex_1 = require("../bases/Flex");
var Image_1 = require("../bases/Image");
var Space_1 = require("../bases/Space");
exports.ResponsiveContainer = Container_1.Container;
exports.ResponsiveFlex = Flex_1.Flex;
exports.ResponsiveText = Text_1.Text;
exports.ResponsiveLayout = Layout_1.Layout;
exports.ResponsiveImage = Image_1.Image;
exports.ResponsiveBackground = Background_1.Background;
exports.ResponsiveContent = exports.ResponsiveContainer.of({
    margin: { xs: '0 20px', lg: '0 auto' },
    width: { lg: 1200 },
});
exports.Content = exports.ResponsiveContent;
exports.RS = {
    Container: exports.ResponsiveContainer,
    Flex: exports.ResponsiveFlex,
    Text: exports.ResponsiveText,
    Layout: exports.ResponsiveLayout,
    Image: exports.ResponsiveImage,
    Space: Space_1.Space,
    Background: exports.ResponsiveBackground,
    Content: exports.ResponsiveContent,
};
