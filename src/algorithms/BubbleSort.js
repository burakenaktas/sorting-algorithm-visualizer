var array = [13, 12, 5, 11, 2, 88, 91, 102, 100, 98]

let currentFirst,
    currentSecond;

for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length; j++) {
        currentFirst = array[j]
        currentSecond = array[j + 1]

        if (currentFirst > currentSecond) {
            array[j + 1] = currentFirst
            array[j] = currentSecond
        }
    }

}

console.log(array)