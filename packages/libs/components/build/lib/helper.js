// Creates a percentage of a given number, using string type and '%' character
export function calculatePercentage(count) {
    // One 
    if (count === 1)
        return '100%';
    // Higher then one
    //  Add '00' to prepare for digit extraction
    var p = "" + (1 / count) + "00", 
    //  Split at '.' and use two digits, add '%'
    pIndex = p.indexOf("."), percent2Digits = p.slice(pIndex + 1, pIndex + 3) + "%", 
    //  Don't start with a '0'
    percent = percent2Digits[0] === "0" ? percent2Digits.slice(1, percent2Digits.length) : percent2Digits;
    return percent;
}
//# sourceMappingURL=helper.js.map