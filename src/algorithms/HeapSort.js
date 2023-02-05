const array = [13, 12, 5, 11, 2, 88, 91, 102, 100, 98]

const heapify = () => {
    const lastIndex = array.length - 1

    for (let currentIndex = lastIndex; currentIndex > 0; currentIndex--) {
        maxHeapMaker(currentIndex)
    }
}

const maxHeapMaker = (currentIndex) => {
    const currentNode = array[currentIndex]
    const parentIndex = Math.floor((currentIndex - 1) / 2)
    let changed = false

    if (array[parentIndex] && currentNode > array[parentIndex]) {
        indexChanger(currentIndex, parentIndex)
        changed = true
    }

    const leftChildIndex = currentIndex * 2
    const rightChildIndex = (currentIndex * 2) + 1

    if (changed) {
        if (array[leftChildIndex]) maxHeapMaker(leftChildIndex)
        if (array[rightChildIndex]) maxHeapMaker(rightChildIndex)
    }
}

const indexChanger = (firstIndex, secondIndex) => {
    const temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

heapify()

const heapSort = () => {
    array.unshift(0)
    const rootIndex = 1
    const lastIndex = array.length - 1

    for (let i = lastIndex; i > 1; i--) {
        indexChanger(i, rootIndex)
        sorter(rootIndex, i)
    }
}

const sorter = (currentIndex, lastIndex) => {
    let changeIndexWith;

    const leftChildIndex = currentIndex * 2 < lastIndex ? currentIndex * 2 : 0
    const rightChildIndex = (currentIndex * 2) + 1 < lastIndex ? (currentIndex * 2) + 1 : 0

    if (!array[leftChildIndex]) return

    if (!array[rightChildIndex]) {
        if (array[currentIndex] < array[leftChildIndex]) {
            indexChanger(leftChildIndex, currentIndex)
            return
        }
        return
    }

    const biggerChildIndex = array[rightChildIndex] < array[leftChildIndex] ? leftChildIndex : rightChildIndex

    if (array[currentIndex] < array[biggerChildIndex]) {
        changeIndexWith = biggerChildIndex
    } else {
        return
    }

    indexChanger(changeIndexWith, currentIndex)
    return sorter(changeIndexWith, lastIndex)
}

heapSort()