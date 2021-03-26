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
var MutipleColumn_1 = require("./MutipleColumn");
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
    Container: Container_1.Container,
    Flex: Flex_1.Flex,
    Text: Text_1.Text,
    Layout: Layout_1.Layout,
    Image: Image_1.Image,
    Space: Space_1.Space,
    MutipleColumn: MutipleColumn_1.MutipleColumn,
    Background: Background_1.Background,
    Content: exports.Content,
};
