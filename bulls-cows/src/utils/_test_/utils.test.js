import {compareArrays, shuffleArray} from "../utils"

describe('compare arrays', () => {
        const testArray1 = [1, 6, 7, 4]
        const testArray2 = [1, 6, 7, 4]
        const testArray3 = [1, 6, 3, 7]
        const testArray4 = [8, 0, 9, 5]

        it('compare arrays: equal', () => {
            const compared = compareArrays(testArray1, testArray2)
            expect(compared).toEqual({values: 0, exact: 4})
        })

        it('compare arrays: part equal', () => {
            const compared = compareArrays(testArray2, testArray3)
            expect(compared).toEqual({values: 1, exact: 2})
        })

        it('compare arrays: no equal', () => {
            const compared = compareArrays(testArray2, testArray4)
            expect(compared).toEqual({values: 0, exact: 0})
        })
    }
)

describe('shuffle array', () => {
    it('array is shuffled', () => {
        const shuffledArray = [1, 6, 7, 4, 0, 9, 3, 2, 0]
        const originalArray = shuffledArray.toString()
        shuffleArray(shuffledArray)
        expect(shuffledArray.toString()).not.toEqual(originalArray)
    })
})