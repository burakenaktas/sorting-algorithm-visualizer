interface ArrayType {
    array: { number: number, sorted: boolean }[],
    arraySize: string,
    smallestIndex: number,
    current: number
}

function Array({ array, arraySize, smallestIndex, current }: ArrayType) {

    /* tslint:disable-next-line */
    let arraySizeNumber: number = +arraySize

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

            {array.map((item, index) => {
                if (index < arraySizeNumber) {
                    return <div style={{ height: 0.6 * item.number, width: `${50 / (arraySizeNumber)}vw`, marginRight: 1, marginLeft: 1, backgroundColor: index === current ? 'green' : item.sorted ? 'orange' : smallestIndex === index ? 'red' : 'lightblue', textAlign: 'center', fontSize: 150 / arraySizeNumber, color: 'white' }} key={Math.random() * 1000}>{item.number}</div>
                }
            })}
        </div>
    )
}

export default Array