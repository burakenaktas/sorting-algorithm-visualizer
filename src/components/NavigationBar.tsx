import '../styles/NavigationBar.css'

interface Props {
    lock: boolean,
    arraySize: string,
    setArraySize: Function,
    generateNewArray: Function,
    selectionSort: Function,
    insertionSort: Function,
    bubbleSort: Function,
    mergeSort: Function,
    quickSort: Function
}

export default function NavigationBar({ lock, arraySize, setArraySize, generateNewArray, selectionSort, insertionSort, bubbleSort, mergeSort, quickSort }: Props) {

    return (
        <div id='navigation-container'>
            <div className={lock ? 'navigation-locked-button' : 'navigation-button'} onClick={() => { lock ? console.log("Don't click!") : generateNewArray() }}>Generate New Array</div>
            <div id='change-container'>
                <div id='change-container-text' style={lock ? { color: 'red' } : { color: 'white' }}>Change Array Size</div>
                <input type="range" id={lock ? "rangeLock" : "range"} min="10" max="100" step="1" value={arraySize}
                    onChange={(e) => { if (!lock) setArraySize((prevState: string) => prevState = e.target.value) }} />
            </div>
            <div id='algorithm-container'>
                <div className={lock ? 'navigation-locked-button' : 'navigation-button'} onClick={() => { lock ? console.log("Don't click!") : selectionSort() }}>Selection Sort</div>
                <div className={lock ? 'navigation-locked-button' : 'navigation-button'} onClick={() => { lock ? console.log("Don't click!") : insertionSort() }}>Insertion Sort</div>
                <div className={lock ? 'navigation-locked-button' : 'navigation-button'} onClick={() => { lock ? console.log("Don't click!") : bubbleSort() }}>Bubble Sort</div>
                <div className={lock ? 'navigation-locked-button' : 'navigation-button'} onClick={() => { lock ? console.log("Don't click!") : mergeSort() }}>Merge Sort</div>
                <div className={lock ? 'navigation-locked-button' : 'navigation-button'} onClick={() => { lock ? console.log("Don't click!") : quickSort() }}>Quick Sort</div>
                <div className={lock ? 'navigation-locked-button' : 'navigation-button'}>Heap Sort</div>
            </div>
        </div >
    )
}

