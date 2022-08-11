var array = [{ number: 1, sorted: false }, { number: 32, sorted: false }, { number: 12, sorted: false }, { number: 99, sorted: false }, { number: 88, sorted: false }, { number: 15, sorted: false }, { number: 12, sorted: false },  { number: 15, sorted: false }]

const sort = (left, right) => {
    

  let l = 0
  let r = 0

  let subArray = []

  while(l < left.length && r < right.length) {
    if(left[l].number < right[r].number) {
      subArray.push(left[l])
      l++
    } else {
      subArray.push(right[r]) 
      r++
    }
  }

  while (l < left.length) {
    subArray.push(left[l])
    l++
  }

  while (r < right.length) {
    subArray.push(right[r])
    r++
  }

  return [...subArray]

    // let i = 0
    // let j = 0

    // while (i < left.length && j < right.length) {
    //     if (left[i].number > right[j].number) {
    //       const temp = left[i].number
    //       left[i].number = right[j].number
    //       right[j].number = temp
    //       i++
    //       if (j + 1 < right.length) {
    //         if (right[j].number > right[j + 1].number) {
    //           while (right[j].number > right[j + 1].number) {
    //             const temp = right[j].number
    //             right[j].number = right[j + 1].number
    //             right[j + 1].number = temp
    //           }
    //         } else {
    //           j++
    //         }
    //       }
    //     } else {
    //       i++
    //     }
    //   }

    //   return [...left, ...right]

    // let sortedArray = []

    // let i = 0
    // let j = 0

    // while (i < left.length && j < right.length) {
    //     if (left[i].number < right[j].number) {
    //         sortedArray.push(left[i])
    //         i++
    //     } else {
    //         sortedArray.push(right[j])
    //         j++
    //     }
    // }

    // while (i < left.length) {
    //     sortedArray.push(left[i])
    //     i++
    // }

    // while (j < right.length) {
    //     sortedArray.push(right[j])
    //     j++
    // }

    // return [...sortedArray]
}

const merge = (array) => {

    if (array.length <= 1) return array

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle, array.length)

    return sort(merge(left), merge(right))
}

console.log(merge(array))