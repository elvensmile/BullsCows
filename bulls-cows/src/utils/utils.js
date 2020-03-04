/**
 * Compare two arrays. Returns number of items with equal value (values) and number of items with equal indexes and values (exact)
 * @param firstArray {Array}
 * @param secondArray {Array}
 * @returns {{values: number, exact: number}}
 */
export const compareArrays = (firstArray, secondArray) => {
    let values = 0
    let exact = 0
    firstArray.forEach(digit => {
        if (secondArray.indexOf(digit)!==-1) {
            if (secondArray.indexOf(digit) === firstArray.indexOf(digit)) {
                exact++
            } else values++
        }
    })
    return {values, exact}
}

/**
 * Durstenfeld shuffle algorithm. Modifying original array.
 * @param array {Array}
 */

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}