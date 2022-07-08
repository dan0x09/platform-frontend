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
import { jsx as _jsx } from "react/jsx-runtime";
import { SiteAlign } from './prop-types';
import "./style.css";
import { calculatePercentage } from "../lib/helper";
export var GridLayout = function (_a) {
    var _b = _a.children, children = _b === void 0 ? [] : _b, _c = _a.style, style = _c === void 0 ? {} : _c, _d = _a.width, width = _d === void 0 ? '90%' : _d, _e = _a.height, height = _e === void 0 ? '80vh' : _e, _f = _a.auto, auto = _f === void 0 ? false : _f, _g = _a.columns, columns = _g === void 0 ? 3 : _g, _h = _a.rows, rows = _h === void 0 ? 2 : _h;
    var containerStyle = {
        width: calculatePercentage(columns),
        height: calculatePercentage(rows)
    };
    return (_jsx("div", __assign({ className: "__GridLayout", style: __assign(__assign({}, style), { width: width, height: height }) }, { children: auto ?
            children.map(function (c, i) { return (_jsx("div", __assign({ style: containerStyle }, { children: c }), "" + i)); })
            : children })));
};
export var PageLayout = function (_a) {
    var children = _a.children, _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.align, align = _c === void 0 ? SiteAlign.TOP : _c;
    var styleAlign = "__SiteTop";
    if (align === SiteAlign.LEFT)
        styleAlign = "__SiteLeft";
    return (_jsx("div", __assign({ className: styleAlign + " __PageLayout", style: style }, { children: children })));
};
//# sourceMappingURL=Layouts.js.map