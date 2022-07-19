import { ChartData } from "../components/prop-types"

// Creates a recharts compatible data list
export function createDataSet(data: ChartData[]): any[] {
    const result: any[] = []
    // For every set
    data.forEach(({yName, points}) => {
        // For every data point in every set
        points.forEach(([x, y]) => {
            // The data list already features this x value
            const xField = result.find(({name}) => name === x)
            if(xField) xField[yName] = y
            // The data set does not feature the x value
            else {
                const newField: any = {name: x}
                newField[yName] = y
                result.push(newField)
            }
        })
    })
    // Sort the data list by x value, where numbers are considered, but strings are not
    const numbers = result.filter(({name}) => typeof name === "number").sort((a, b) => a.name - b.name),
        strings = result.filter(({name}) => typeof name !== "number").sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
    
    return [...strings, ...numbers]
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