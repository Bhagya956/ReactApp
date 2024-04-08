import { useState } from "react";

const UseStateEx2=()=>{
   const [fruits,newFruits]=useState(["apple","banana"])

   const addFruit=()=>{
    // newFruits(fruits+)

    const freshFruits=[...fruits,"new fruit"]
    newFruits(freshFruits)


   }


    return(
        <>
        <h3>UseStateEx2</h3>
        {
            fruits.map((val,index)=>
        <h4 key={index}>{val}</h4>)

        }

        <button onClick={addFruit}>Add fruit</button>
        </>
    )
}
export default UseStateEx2;