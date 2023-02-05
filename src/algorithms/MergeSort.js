var array = [{ number: 1, sorted: false }, { number: 32, sorted: false }, { number: 12, sorted: false }, { number: 99, sorted: false }, { number: 88, sorted: false }, { number: 15, sorted: false }, { number: 12, sorted: false }, { number: 15, sorted: false }]

const sort = (left, right) => {


  let l = 0
  let r = 0

  let subArray = []

  while (l < left.length && r < right.length) {
    if (left[l].number < right[r].number) {
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
}

const merge = (array) => {

  if (array.length <= 1) return array

  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle, array.length)

  return sort(merge(left), merge(right))
}

console.log(merge(array))