import { useState } from "react";

const UseStateExample1 = ()=>{

    const [count,setCount]=useState(0);

    // const increaseCount=()=>{
       
    //     setCount(preCount=>preCount+2)  //updates based on the previous count and it can implement more than 1 time  
    //      //setCount(count+1);  //only increments one time
    // }

    // const decrementCount=(value)=>{
    //     setCount(count-value)

    // }

    const changeHandler=(value,type)=>{
        if(type==="increase"){
            setCount(count+value)
        }
        else if(type==="decrease"){
            setCount(count-value)

        }
        else{
            setCount(0)
        }

    }





    return(
        <>
        <h3> Count {count}</h3>
        {/* <button onClick={increaseCount}>Increase</button>
        <button onClick={()=>decrementCount(5)}>Decrement</button> */}

        <button onClick={()=>changeHandler(2,"increase")}>Increment</button>
        <button onClick={()=>changeHandler(1,"decrease")}>Decrease</button>
        <button onClick={()=>changeHandler(0)}>Reset</button>
        
        </>
    )
}

export default UseStateExample1;

