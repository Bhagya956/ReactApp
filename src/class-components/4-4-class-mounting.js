// import { Component } from "react";
// import axios,{Axios} from "axios";
// import "./index.css"




// class ProductListing extends Component{

//     state={
//         products:[]
//     }

//     componentDidMount(){
//         this.fetchData()

//     }

//     // fetchData=()=>{
//     //     fetch("https://dummyjson.com/products")
//     //     .then(response=>response.json())
//     //     .then(response=>console.log(response))

//     // }

//      fetchData=async()=>{
//         // let result=await fetch("https://dummyjson.com/products")
//         // let result1=await result.json()
//         // console.log(result)
//         const result=await axios.get("https://dummyjson.com/products")
//         //console.log(result)

//         this.setState({
//             products:result.data.products
//         })

//     }

//     // deleteProduct=(index)=>{
//     //     const newproduct=this.state.products.filter((eachproduct,i)=>i!==index)


//     //     this.setState(
//     //         {
//     //             products:newproduct
//     //         }
//     //     )



//     }

//     render()
        
    
       
    
// export default ProductListing;