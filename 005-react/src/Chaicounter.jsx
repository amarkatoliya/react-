import {useState} from "react";

function counter() {
    const [count,setCount] = useState(0);

    const chaiCounter = () => {
        setCount(prev => prev+1)
    }

    return(
        <div>
            <h1>Count of tea is: {count}</h1>
            <button onClick={chaiCounter}>counter of tea</button>
        </div>
    )
}

