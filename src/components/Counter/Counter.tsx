import { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0)

    return (
        <>
            <div>
                {number}
            </div>
            <button onClick={e => setNumber(number + 1)}>+</button>
            <button onClick={e => setNumber(prev => prev - 1)}>-</button>
        </>
    )
}

export default Counter;