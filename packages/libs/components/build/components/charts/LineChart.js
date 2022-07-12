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
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
import "./style.css";
export var FAB = function (_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b;
    var data = [
        [0, 1],
        { x: 20, y: 30 }
    ];
    return (_jsxs(LineChart, __assign({ width: 500, height: 300, data: data, style: style }, { children: [_jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(CartesianGrid, { stroke: "#eee", strokeDasharray: "5 5" }), _jsx(Line, { type: "monotone", dataKey: "uv", stroke: "#8884d8" }), _jsx(Line, { type: "monotone", dataKey: "pv", stroke: "#82ca9d" })] })));
};
//# sourceMappingURL=LineChart.js.map