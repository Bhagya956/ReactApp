import { useRef, useState } from "react";


const UseStateEx3=()=>{
    const[timer,setTimer]=useState(20)
    const [clear,setclear] = useState(null);


    const startTimer=()=>{
       const id = setInterval(()=>{
            setTimer(preTime=>preTime-1)
        },1000);
        setclear(id);
    }
    

    const stopTimer=()=>{
      clearInterval(clear);
    }

   
    return(
        <div>
        <button onClick={startTimer}>Start Timer</button>
        <h4 style={
           { color:timer<=10 ? "red":"black"
         } }>{timer}</h4>
         {/* {
            timer<=10 && <h3>exam about to end</h3> 
         } */}
         <button onClick={stopTimer}>Stop Timer</button>

      
        
        </div>
    )

}

export default UseStateEx3;