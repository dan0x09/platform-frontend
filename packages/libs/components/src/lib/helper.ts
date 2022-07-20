import { ChartData } from "../components/prop-types"

// Creates a recharts compatible data list
//  data: DataStructure to enable multiple charts at once, while combining the x values
//  sort: whether the x values should be sorted by string < number && numbers && strings
export function createDataSet(dataKeyX: string, data: ChartData[], sort: boolean): any[] {
    const result: any[] = []
    // For every set
    data.forEach(({yName, points}) => {
        // For every data point in every set
        points.forEach(([x, y]) => {
            // The data list already features this x value
            const xField = result.find(f => f[dataKeyX] === x)
            if(xField) xField[yName] = y
            // The data set does not feature the x value
            else result.push({[dataKeyX]: x, [yName]: y})
        })
    })

    if(sort) {
        // Sort the data list by x value, where numbers are considered, but strings are not
        const numbers = result.filter(f => typeof f[dataKeyX] === "number").sort((a, b) => a[dataKeyX] - b[dataKeyX]),
            strings = result.filter(f => typeof f[dataKeyX] !== "number").sort((a, b) => a[dataKeyX] < b[dataKeyX] ? -1 : a[dataKeyX] > b[dataKeyX] ? 1 : 0)
        
        return [...strings, ...numbers]
    }else {
        return result
    }
}


// Creates a percentage of a given number, using string type and '%' character
export function calculatePercentage(count: number): string {
    // One 
    if(count === 1) return '100%'
    // Higher then one
    //  Add '00' to prepare for digit extraction
    const p = "" + (1 / count) + "00",
    //  Split at '.' and use two digits, add '%'
        pIndex = p.indexOf("."),
        percent2Digits = p.slice(pIndex + 1, pIndex + 3) + "%",
    //  Don't start with a '0'
        percent = percent2Digits[0] === "0" ? percent2Digits.slice(1, percent2Digits.length) : percent2Digits

    return percent
}