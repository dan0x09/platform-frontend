import { ChartData } from "../../../src/components/prop-types"
import { createDataSet, calculatePercentage } from "../../../src/lib/helper"

describe('helper/createDataSet', function () {
    const simpleSet =
        [[{
            yName: "why",
            color: "red",
            points: [
                ["jo", 1],
                [.5, 0],
                [0, .5],
                [1, 0],
                ["lol", 1]
            ]
        }], [
            { name: "jo", why: 1 },
            { name: "lol", why: 1 },
            { name: 0, why: .5 },
            { name: .5, why: 0 },
            { name: 1, why: 0 }
        ]]

    it('works for a simple set', function () {
        expect(JSON.stringify(createDataSet(simpleSet[0] as ChartData[]))).toBe(JSON.stringify(simpleSet[1]))
    })


    const twoSets =
        [[{
            yName: "why",
            color: "red",
            points: [
                ["jo", 1],
                [.5, 0],
                [0, .5],
                [1, 0],
                ["lol", 1]
            ]
        }, {
            yName: "vi",
            color: "yellow",
            points: [
                ["jo", 2],
                [.75, 0],
                [0, .5],
                [1, 0],
                ["lol", 2]
            ]
        }], [
            { name: "jo", why: 1, vi: 2 },
            { name: "lol", why: 1, vi: 2 },
            { name: 0, why: .5, vi: .5 },
            { name: .5, why: 0 },
            { name: .75, vi: 0},
            { name: 1, why: 0, vi:  0}
        ]]

    it('works for two sets', function () {
        expect(JSON.stringify(createDataSet(twoSets[0] as ChartData[]))).toBe(JSON.stringify(twoSets[1]))
    })
})

describe('helper/calculatePercentage', function () {
    it('is 100% for 1', function () {
        expect(calculatePercentage(1)).toBe("100%")
    })

    it('is 50% for 2', function () {
        expect(calculatePercentage(2)).toBe("50%")
    })

    it('is 33% for 3', function () {
        expect(calculatePercentage(3)).toBe("33%")
    })

    it('is 25% for 4', function () {
        expect(calculatePercentage(4)).toBe("25%")
    })

    it('is 1% for 100', function () {
        expect(calculatePercentage(100)).toBe("1%")
    })
})