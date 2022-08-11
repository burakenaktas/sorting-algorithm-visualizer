import { useEffect, useState } from 'react';
import './App.css';

// Components
import NavigationBar from './components/NavigationBar';
import Array from './components/Array'

interface ArrayType {
  number: number,
  sorted: boolean,
}

const timer = (ms: number) => new Promise(res => setTimeout(res, ms))

function App() {

  const [array, setArray] = useState([{ number: 0, sorted: false }])
  const [arraySize, setArraySize] = useState("100")
  const [smallestIndex, setSmallestIndex] = useState(1000000)
  const [current, setCurrent] = useState(1000000)
  const [lock, setLock] = useState(false)

  let arraySizeNumber: number = +arraySize

  useEffect(() => {
    generateNewArray()
  }, [])

  useEffect(() => {

  }, [array])

  // Generate New Array
  const generateNewArray = () => {
    setLock(true)
    setCurrent(curr => curr = 1000000)
    setSmallestIndex(curr => curr = 1000000)
    setArray([])

    function loop(i: number) {
      setTimeout(function () {
        const newNumber = Math.floor(Math.random() * 999)
        setArray(oldArray => [...oldArray, { number: newNumber, sorted: false }])
        if (i === 99) setLock(false)
      }, i * 10)
    }

    for (let i = 0; i < 100; ++i) {
      loop(i)
    }
  }

  const selectionSort = async () => {
    setLock(true)
    let smallest = 0
    let smallestLocation = 0
    let current = 0

    for (let i = 0; i < arraySizeNumber; i++) {
      smallest = array[i].number
      current = array[i].number
      for (let x = i + 1; x < arraySizeNumber; x++) {
        setCurrent(x)
        if (x === arraySizeNumber - 1) {
          setCurrent(103210321031)
        }
        if (array[x].number < smallest) {
          smallest = array[x].number
          setSmallestIndex(x)
          smallestLocation = x
        }
        setArray([...array])
        await timer(1)
      }
      if (smallest <= current) {
        array[i].number = smallest
        array[i].sorted = true
        array[smallestLocation].number = current
      }
      setArray([...array.slice(0, arraySizeNumber)])
    }
    setLock(false)
  }

  const insertionSort = async () => {
    setLock(true)
    let currentFirst: number,
      currentSecond: number;

    for (let i = 0; i < arraySizeNumber - 1; i++) {
      currentFirst = array[i].number
      currentSecond = array[i + 1].number

      setCurrent(i)
      setSmallestIndex(i + 1)

      if (currentSecond < currentFirst) {
        array[i].number = currentSecond
        array[i + 1].number = currentFirst
        await timer(1)
      }

      for (let x = i - 1; x >= 0; x--) {
        if (array[x + 1].number < array[x].number) {
          setCurrent(x)
          setSmallestIndex(x + 1)
          const temp = array[x]
          array[x] = array[x + 1]
          array[x + 1] = temp
          await timer(1)
          setArray([...array])
        } else {
          await timer(1)
          break
        }
      }
    }

    array.map((element) => { element.sorted = true })

    setArray([...array.slice(0, arraySizeNumber)])

    setCurrent(1000000)
    setSmallestIndex(1000000)
    setLock(false)
  }

  const bubbleSort = async () => {
    setLock(true)
    let currentFirst: number;
    let currentSecond: number;

    let secondLength = arraySizeNumber - 1

    for (let i = 0; i < arraySizeNumber; i++) {
      for (let j = 0; j < secondLength; j++) {
        currentFirst = array[j].number
        currentSecond = array[j + 1].number

        setCurrent(j + 1)
        setSmallestIndex(j)

        if (currentFirst > currentSecond) {
          array[j + 1].number = currentFirst
          array[j].number = currentSecond
        }

        setArray([...array.slice(0, arraySizeNumber)])
        await timer(1)
      }
      array[secondLength].sorted = true
      secondLength -= 1

      if (i === arraySizeNumber - 1) {
        setCurrent(1000000)
        setSmallestIndex(1000000)
      }
    }
    setLock(false)
  }

  const mergeSort = async () => {

    // let time = 0
    // let nextLeftIndex = 0

    const sort = (left: ArrayType[], right: ArrayType[]) => {

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

    const merge: Function = (array: ArrayType[]) => {

      if (array.length <= 1) {
        return array
      }

      const middle = Math.floor(array.length / 2)
      const left = array.slice(0, middle)
      const right = array.slice(middle, array.length)

      return sort(merge(left), merge(right))
    }

    setArray(merge(array))

  }

  const quickSort = () => {

    const QuickSort: Function = (array: ArrayType[]) => {
      if (array.length <= 1) return array

      const pivot = array[array.length - 1]
      const leftArray = []
      const rightArray = []

      for (let i = 0; i < array.length - 1; i++) {
        if (array[i].number < pivot.number) {
          leftArray.push(array[i])
        } else {
          rightArray.push(array[i])
        }
      }

      if (rightArray.length && leftArray.length) {
        return [...QuickSort(leftArray), pivot, ...QuickSort(rightArray)]
      } else if (leftArray.length) {
        return [...QuickSort(leftArray), pivot]
      } else {
        return [pivot, ...QuickSort(rightArray)]
      }
    }

    setArray(QuickSort(array.slice(0, arraySizeNumber)))

  }

  const heapSort = () => {
    console.log(array)

    for (let i = array.length - 1; i > 0; i--) {

      let compareIndex = i
      while (compareIndex > 0) {
        const PARENT_INDEX = Math.floor((compareIndex - 1) / 2)

        if (array[compareIndex].number > array[PARENT_INDEX].number) {
          [array[compareIndex], array[PARENT_INDEX]] = [array[PARENT_INDEX], array[compareIndex]]
          compareIndex = Math.floor((compareIndex - 1) / 2)
        } else {
          compareIndex = 0
        }
      }
    }

    for (let last = array.length - 1; last > 0; last--) {

      const max = 0;

      const temp = array[max]
      array[max] = array[last]
      array[last] = temp
      array[last].sorted = true

      let blockLeft = false
      let blockRight = false

      let compareIndex = 0

      while (array[compareIndex].number < array[(compareIndex * 2) + 1].number || array[compareIndex].number < array[(compareIndex * 2) + 2].number) {

        if (array[(compareIndex * 2) + 1].sorted === true) {
          blockLeft = true
          blockRight = true
        } else if (array[(compareIndex * 2) + 2].sorted === true) {
          blockRight = true
        } else {
          blockLeft = false
          blockRight = false
        }

        if (blockLeft === false && blockRight === false) {
          if (array[(compareIndex * 2) + 1].number > array[(compareIndex * 2) + 2].number) {
            const temp = array[(compareIndex * 2) + 1]
            array[(compareIndex * 2) + 1] = array[compareIndex]
            array[compareIndex] = temp
            compareIndex = (compareIndex * 2) + 1
          } else {
            const temp = array[(compareIndex * 2) + 2]
            array[(compareIndex * 2) + 2] = array[compareIndex]
            array[compareIndex] = temp
            compareIndex = (compareIndex * 2) + 2
          }
        } else if (blockLeft === false && blockRight === true) {
          if (array[compareIndex].number < array[(compareIndex * 2) + 1].number) {
            const temp = array[(compareIndex * 2) + 1]
            array[(compareIndex * 2) + 1] = array[compareIndex]
            array[compareIndex] = temp
            break
          }
        } else if (blockLeft === true && blockRight === true) {
          break
        }
      }
    }
    setArray(array)
  }

  return (
    <div className="App">
      <NavigationBar lock={lock} arraySize={arraySize} setArraySize={setArraySize}
        generateNewArray={generateNewArray} selectionSort={selectionSort} insertionSort={insertionSort} bubbleSort={bubbleSort}
        mergeSort={mergeSort} quickSort={quickSort} />
      <Array array={array} arraySize={arraySize} smallestIndex={smallestIndex} current={current} />
    </div>
  )
}

export default App;
