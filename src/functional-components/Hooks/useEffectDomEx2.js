import { useState } from "react"
import { useEffect } from "react"

const UseEffectDom=()=>{

    const [count,setCount]=useState(1)
    //const [a,set a]=useState(0)

    useEffect(()=>{
        document.title=`Count ${count}`
    },[count])

    const incrementHandler=()=>{
        setCount(count+1)
    }

    // useEffect(()=>{
    //     set a(a+1)
    // },[a])
    // console.log(a);



    return(
        <>
        <h5>currentCount{count}</h5>
        <button onClick={incrementHandler}>Click to change the count</button>
        </>
    )

}
export default UseEffectDom;