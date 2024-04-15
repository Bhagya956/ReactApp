import { useState } from "react"
import { useEffect } from "react"

const UseEffectDom=()=>{

    const [count,setCount]=useState(1)

    useEffect(()=>{
        document.title=`Count ${count}`
    },[count])

    const incrementHandler=()=>{
        setCount(count+1)
    }



    return(
        <>
        <h5>currentCount{count}</h5>
        <button onClick={incrementHandler}>Click to change the count</button>
        </>
    )

}
export default UseEffectDom;