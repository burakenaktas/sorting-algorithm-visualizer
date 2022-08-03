var array = [13, 12, 5, 11, 2, 100, 98]

let currentFirst,
    currentSecond;

for (let i = 0; i < array.length; i++) {
    currentFirst = array[i]
    currentSecond = array[i + 1]

    if (currentSecond < currentFirst) {
        array[i] = currentSecond
        array[i + 1] = currentFirst
    }

    for (let x = i - 1; x >= 0; x--) {
        if (array[x + 1] < array[x]) {
            const temp = array[x]
            array[x] = array[x + 1]
            array[x + 1] = temp
        } else {
            break
        }
    }
}

console.log(array)
