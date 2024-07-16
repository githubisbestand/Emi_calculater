import { useState, useEffect } from "react";

function Increment(){

    const [count, setCount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count => count + 1)
        },1000)
    },[count])

    // const handleClick = () => setCount(count + 1);
    // const handleBackClick = () => setCount(count - 1)


    return(
        <>
            <div>
                <p>your count number is {count}</p>
                {/* <button onClick={handleBackClick}>-</button>
                <p>your number is {count}</p>
                <button onClick={handleClick}>+</button> */}
            </div>
        </>
    )
}
export default Increment;