var array = [13, 12, 5, 11, 2, 88, 91, 102, 100, 55]

const QuickSort = (array) => {

    if (array.length <= 1) return array

    const pivot = array[array.length - 1]
    let compareIndex = 0
    let secondPivot = 0

    while (compareIndex < array.length - 1) {
        if (array[secondPivot] < pivot) {
            secondPivot += 1
            compareIndex += 1
        }
        if (pivot >= array[compareIndex]) {
            const temp = array[compareIndex]
            array[compareIndex] = array[secondPivot]
            array[secondPivot] = temp

            secondPivot += 1
            compareIndex += 1
        } else if (pivot < array[compareIndex]) {
            compareIndex += 1
        }
    }

    array[array.length - 1] = array[secondPivot]
    array[secondPivot] = pivot

    const leftArray = array.splice(0, secondPivot)
    const rightArray = array.splice(-secondPivot)

    if (leftArray.length) {
        return [...QuickSort(leftArray)]
    } else {
        return [...QuickSort(leftArray), ...QuickSort(rightArray)]
    }

}

console.log(QuickSort(array))