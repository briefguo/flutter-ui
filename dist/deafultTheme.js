"use strict";
exports.__esModule = true;
exports.textTheme = exports.theme = exports.colors = void 0;
exports.colors = {
    primary: '#FF6000',
    "default": '#333',
    secondary: 'rgba(0,0,0,0.45)',
    descriptionColor: '#888',
    success: '#00B23F',
    warning: '#FF6000',
    fail: '#ff3838'
};
exports.theme = {
    contentContainerWidth: 1080,
    borderRadius: '5px',
    defaultBodyBackground: '#F5F5F9',
    defaultContrastingColor: '#333',
    colors: exports.colors
};
exports.textTheme = {
    light: { fontSize: 12 },
    "default": {},
    pageTitle: { fontSize: 18, fontWeight: 500 },
    title: { fontSize: 17 },
    description: {
        fontSize: 12,
        color: '#888',
        lineHeight: 1.25
    },
    body: { fontSize: 14 }
};
