"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.GlobalStyle = exports.textTheme = exports.theme = exports.colors = void 0;
var styled_components_1 = require("styled-components");
exports.colors = {
    alipay: '#108ee9',
    primary: '#ff6700',
    secondary: 'rgba(0,0,0,0.45)',
    descriptionColor: '#888',
    wechat: '#08C160',
    success: '#00B23F',
    white: '#fff',
    fail: '#ff3838'
};
exports.theme = {
    borderRadius: '5px',
    defaultBodyBackground: '#F5F5F9',
    defaultContrastingColor: '#333',
    colors: exports.colors
};
exports.textTheme = {
    middle: { fontSize: 24 },
    title: { fontSize: 17 },
    light: { fontSize: 12 },
    description: { fontSize: 12, color: '#888' },
    "default": {},
    body: { fontSize: 14 }
};
exports.GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    -webkit-font-smoothing: antialiased;\n    text-rendering: optimizeLegibility;\n    color: ", ";\n    background: ", " !important;\n  }\n"], ["\n  body {\n    -webkit-font-smoothing: antialiased;\n    text-rendering: optimizeLegibility;\n    color: ",
    ";\n    background: ",
    " !important;\n  }\n"
    // https://www.styled-components.com/docs/tooling#styled-theming
])), function (props) {
    return props.contrastingColor || exports.theme.defaultContrastingColor;
}, function (props) {
    return props.backgroundColor || exports.theme.defaultBodyBackground;
});
var templateObject_1;
// https://www.styled-components.com/docs/tooling#styled-theming
