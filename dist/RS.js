"use strict";
exports.__esModule = true;
exports.RS = void 0;
var Container_1 = require("./bases/Container");
var Text_1 = require("./bases/Text");
var Image_1 = require("./bases/Image");
var Space_1 = require("./bases/Space");
var Flex_1 = require("./bases/Flex");
var Background_1 = require("./extends/Background");
var Content_1 = require("./extends/Content");
exports.RS = {
    Container: Container_1.ResponsiveContainer,
    Text: Text_1.ResponsiveText,
    Flex: Flex_1.ResponsiveFlex,
    Background: Background_1.ResponsiveBackground,
    Content: Content_1.ResponsiveContent,
    Image: Image_1.ResponsiveImage,
    Space: Space_1.ResponsiveSpace
};
