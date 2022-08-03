var array = [23, 32, 34912, 219, 132, 84]

var smallest = 0
var smallestLocation = 0
var current = 0

for (let i = 0; i < array.length; i++) {
    smallest = array[i]
    current = array[i]
    for (let x = i + 1; x < array.length; x++) {
        if (array[x] < smallest) {
            smallest = array[x]
            smallestLocation = x
        }
    }
    if (smallest === current) {
        continue
    } else if (smallest < current) {
        array[i] = smallest
        array[smallestLocation] = current
    }
}