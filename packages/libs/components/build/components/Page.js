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
import { SiteAlign } from "./prop-types";
import { FAB } from "./Buttons";
export var Site = function (_a) {
    var children = _a.children, _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.align, align = _c === void 0 ? SiteAlign.TOP : _c;
    var alignStyle = "__SiteLeft";
    if (align === SiteAlign.TOP)
        alignStyle = "__SiteTop";
    return (_jsx("div", __assign({ className: "_Site " + alignStyle + " Site", style: style }, { children: children })));
};
export var Page = function (_a) {
    var children = _a.children, _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.leftWidth, leftWidth = _c === void 0 ? false : _c;
    var isMobile = false; // TODO add mobile detection
    // Used to switch between site parts (if given)
    var _d = useState(false), mobileSwitch = _d[0], setMobileSwitch = _d[1];
    if (children[1]) {
        if (!isMobile)
            return (_jsxs("div", __assign({ className: "_Page color0 Page", style: style }, { children: [_jsx("div", __assign({ className: "__PageLeft", style: (leftWidth ? { width: leftWidth } : {}) }, { children: children[0] })), _jsx("div", __assign({ className: "__PageRight" }, { children: children[1] }))] })));
        else {
            return (_jsxs("div", __assign({ className: "_PageMobile color0 PageMobile" }, { children: [!mobileSwitch && children[0], mobileSwitch && children[1], _jsx(FAB, { toggle: true, onClick: function () { return setMobileSwitch(!mobileSwitch); } })] })));
        }
    }
    else {
        if (!isMobile)
            return (_jsx("div", __assign({ className: "_Page __PageH color0 Page", style: style }, { children: children })));
        else {
            return (_jsx("div", __assign({ className: "_PageMobile __PageH color0 PageMobile" }, { children: children })));
        }
    }
};
//# sourceMappingURL=Page.js.map