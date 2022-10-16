import {useState} from 'react'

interface counterType {
    a : number,
    b : number
}


const TestComponent = () =>{
    const [counterValues,setCounterValues] = useState<counterType>({a:0,b:0});

    const addA = () =>{
        setCounterValues({...counterValues,a:1,b:1})
    }

    return (
        <div className='component'>
        <div className='display'>
            <h4>[{counterValues?.a},{counterValues?.b}]</h4>
        </div>
        <div>
            <button onClick={addA}>Add to A</button>
        </div>
        </div>
    )
}

export default TestComponent;