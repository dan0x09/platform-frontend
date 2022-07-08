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
import "./style.css";
// A container
export var Block = function (_a) {
    var children = _a.children, _b = _a.style, style = _b === void 0 ? {} : _b, title = _a.title, note = _a.note;
    return (_jsxs("div", __assign({ className: "_Block color1 Block", style: style }, { children: [title && _jsx("p", { children: title }), children, note &&
                _jsx("div", __assign({ className: "__NoteWrapper" }, { children: _jsx("p", __assign({ className: "_Note Note" }, { children: note })) }))] })));
};
//# sourceMappingURL=Block.js.map