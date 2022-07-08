var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./style.css";
export var FAB = function (_a) {
    var _b = _a.toggle, toggle = _b === void 0 ? false : _b, _c = _a.style, style = _c === void 0 ? {} : _c, _d = _a.styleActive, styleActive = _d === void 0 ? {} : _d, onClick = _a.onClick, _e = _a.children, children = _e === void 0 ? false : _e;
    var _f = useState(false), clicked = _f[0], setClicked = _f[1], click = function () {
        onClick();
        setClicked(toggle && !clicked);
    };
    return (_jsxs("div", { children: [_jsx("input", { "data-testid": "button-input", className: "_FAB color2 FAB" + (clicked ? " _FABActive FABActive" : ""), style: !clicked ? style : __assign(__assign({}, style), styleActive), type: "button", onClick: click }), children] }));
};
//# sourceMappingURL=Buttons.js.map