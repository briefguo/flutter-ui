"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowScroll = void 0;
var react_1 = require("react");
var useWindowScroll = function () {
    var _a = react_1.useState(function () { return ({
        x: window.pageXOffset,
        y: window.pageYOffset,
    }); }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function () {
            setState(function (state) {
                var pageXOffset = window.pageXOffset, pageYOffset = window.pageYOffset;
                //Check state for change, return same state if no change happened to prevent rerender
                //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
                return state.x !== pageXOffset || state.y !== pageYOffset
                    ? {
                        x: pageXOffset,
                        y: pageYOffset,
                    }
                    : state;
            });
        };
        //We have to update window scroll at mount, before subscription.
        //Window scroll may be changed between render and effect handler.
        window.addEventListener('scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            window.removeEventListener('scroll', handler);
        };
    }, []);
    return state;
};
exports.useWindowScroll = useWindowScroll;
