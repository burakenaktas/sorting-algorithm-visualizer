
let array = [13, 12, 5, 11, 2, 88, 91, 102, 100, 55]
let arrayIndex = 0

var node = array[arrayIndex]
var leftNode = array[arrayIndex*2]
var rightNode = array[(arrayIndex*2) + 1]

if(node > leftNode) {
    [array[arrayIndex], array[arrayIndex*2]] = [array[arrayIndex*2], array[arrayIndex]] 
}