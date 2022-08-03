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

      let i = 0
      let j = 0

      while (i < left.length && j < right.length) {
        if (left[i].number > right[j].number) {
          const temp = left[i].number
          left[i].number = right[j].number
          right[j].number = temp
          i++
          if (j + 1 < right.length) {
            if (right[j].number > right[j + 1].number) {
              while (right[j].number > right[j + 1].number) {
                const temp = right[j].number
                right[j].number = right[j + 1].number
                right[j + 1].number = temp
              }
            } else {
              j++
            }
          }
        } else {
          i++
        }
      }

        return [...left, ...right]
      // console.log('sort algoritm')
      // let l = nextLeftIndex
      // let r = nextLeftIndex + left.length

      // if (Math.log2(time) % 1 === 0) {
      //   r = ((r + right.length) / 2)
      //   if (nextLeftIndex > (arraySizeNumber / 2)) {
      //     l = arraySizeNumber / 2
      //   }
      //   l = 0
      // }

      // while (l < r && r < r + right.length) {
      //   console.log('üstteki şey dönüyo')
      //   setCurrent(l)
      //   setSmallestIndex(r)

      //   if (array[l].number <= array[r].number) {
      //     l++
      //   } else {
      //     const temp: ArrayType = array[l]
      //     array[l] = array[r]
      //     array[r] = temp

      //     let now = r + 1
      //     while (array[now - 1].number >= array[now].number && now < r + right.length) {
      //       console.log('icerdeyiz')
      //       setCurrent(now)
      //       setSmallestIndex(now + 1)

      //       const temp: ArrayType = array[now - 1]
      //       array[now - 1] = array[now]
      //       array[now] = temp

      //       now += 1
      //       await timer(1000)
      //     }
      //     r++
      //   }
      //   setArray([...array])
      //   await timer(1000)
      // }

      // if (!(Math.log2(time) % 1 === 0)) {
      //   nextLeftIndex += right.length
      // } else {
      //   nextLeftIndex = right.length * 2
      // }

      // time += 1

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

  // ARRAYIN ICINI PARCALARA BÖLÜCEZ AYNI ARRAYIN ICINDE PARCALARI SIRALICAK TEK TEK NASI OLCAK BAKALIM DÜSÜNÜOZ :d


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
