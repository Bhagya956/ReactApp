import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";


const UseEffectButtonTask=()=>{
    const [product,setproduct]=useState([])
    const [count,setcount]=useState(1)
    const [oneproduct,setoneproduct]=useState({})

    useEffect(()=>{

        fetchproducts()
    },[])

    useEffect(()=>{
        eachProduct()

    },[count])

    const fetchproducts=async()=>{
        const res=await axios.get("https://dummyjson.com/products")

        setproduct(res.data.products)

        console.log(res.data.products)

    }

    const eachProduct=async()=>{
       const re= await axios.get(`https://dummyjson.com/products/${count}`)
        console.log(re.data)
        setoneproduct(re.data)
        
    }

    const countInc=(i)=>{
        setcount(i)
    }



    return(
        <>
        <h5>Each product list</h5>{
            product.map((eachobj,i)=>{
                return(
                    
                    <button onClick={()=>countInc(i+1)}>{i+1}</button>
                    
                )
            })
        }
        <div>

<img src={oneproduct.thumbnail} alt={oneproduct.title} width="200"/>

<h2>Brand:{oneproduct.brand}</h2>
<h4>{oneproduct.description}</h4>

</div>



        
       
        
        </>
    )
    
}
export default UseEffectButtonTask;