import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



const UseEffectEx1=()=>{
    const[productListing,setProductListind]=useState([])
    const[count,setCount]=useState(1)
    const[age,setAge]=useState(1)


    useEffect(()=>{
        console.log("useEffect rendering")
        fetchProducts()
        
    },[count,age])

    useEffect(()=>{
        eachProductFetch()
    },[count])

    const eachProductFetch=async()=>{
        const response=await axios.get(`https://dummyjson.com/products/${count}`)
        console.log(response)

    }







    const fetchProducts=async()=>{
       const response = await axios.get("https://dummyjson.com/products")
      // console.log(response)
       setProductListind(response.data.products)
     // console.log(response)
    }

    const incrementHandler=()=>{
        setCount(count+1)
    }

    const incrementAge=()=>{
        setAge(age+1)
    }


    return(
        <>
        <h5>Current Count{count}</h5>
        <button onClick={incrementHandler}>click to change the count</button>

        <h5>`Current Age ${age}`</h5>
        <button onClick={incrementAge}>click to change the Age</button>
        </>
    )
}
export default UseEffectEx1;