import { calculatePercentage } from "../../../src/lib/helper"

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