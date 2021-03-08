"use strict";
exports.__esModule = true;
exports.RS = exports.Content = exports.ResponsiveContent = exports.ResponsiveBackground = exports.ResponsiveSpace = exports.ResponsiveImage = exports.ResponsiveLayout = exports.ResponsiveText = exports.ResponsiveFlex = exports.ResponsiveContainer = void 0;
var Container_1 = require("../bases/Container");
var Text_1 = require("../bases/Text");
var Image_1 = require("../bases/Image");
var Space_1 = require("../bases/Space");
var Flex_1 = require("../bases/Flex");
var Layout_1 = require("../bases/Layout");
var Background_1 = require("./Background");
var createRSC_1 = require("../helpers/createRSC");
exports.ResponsiveContainer = createRSC_1.createRSC(Container_1.SingleContainer);
exports.ResponsiveFlex = createRSC_1.createRSC(Flex_1.SingleFlex);
exports.ResponsiveText = createRSC_1.createRSC(Text_1.SingleText);
exports.ResponsiveLayout = createRSC_1.createRSC(Layout_1.SingleLayout);
exports.ResponsiveImage = createRSC_1.createRSC(Image_1.SingleImage);
exports.ResponsiveSpace = createRSC_1.createRSC(Space_1.SingleSpace);
exports.ResponsiveBackground = createRSC_1.createRSC(Background_1.SingleBackground);
exports.ResponsiveContent = exports.ResponsiveContainer.of({
    margin: { xs: '0 20px', lg: '0 auto' },
    width: { lg: 1200 }
});
exports.Content = exports.ResponsiveContent;
exports.RS = {
    Container: exports.ResponsiveContainer,
    Flex: exports.ResponsiveFlex,
    Text: exports.ResponsiveText,
    Layout: exports.ResponsiveLayout,
    Image: exports.ResponsiveImage,
    Space: exports.ResponsiveSpace,
    Background: exports.ResponsiveBackground,
    Content: exports.ResponsiveContent
};
