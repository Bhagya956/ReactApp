import { Component } from "react";
import axios from "axios"
// import "../class-components/5-4-task.css"
import "./stylee.css";



class FridayTask extends Component{
    state={
        product:[],
        Count:0
    }

    componentDidMount(){
        this.fetchData()

    }


fetchData = async()=>{
    const result=await axios.get("https://dummyjson.com/products")
    console.log(result)

    this.setState({
        product:result.data.products
    })
}


deleteProduct=(index)=>{
    const newP=this.state.product.filter((eachObject,i)=>i!==index)
    this.setState(
        {
            product:newP
        }
    )
    
}

// updateProduct=(m)=>{
//     const newU=this.state.product.map((eachObject)=>{
//         //const {description}=eachObject
//         console.log(eachObject);
//     if(m=== eachObject.id){
//         return({

//             "eachObject.id ": 1,
//             "eachobject.title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//             "price": 109.95,
//             "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//             "category": "men's clothing",
//         })
//     }
//     else{
//         return null;
//     }
//     })

//     this.setState(
//         {
//             product:newU
//         }
//     )
// }

updateProduct = (productId) => {
    const updatedProducts = this.state.product.map(product => {
        if (product.id === productId) {
            // Update the properties of the product with the matching id
            return {
                ...product,
                id: product.id, 
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "men's clothing",
              
            };
        }
        return product; // Return unchanged products
    });

    this.setState({
        product: updatedProducts
    });
}






    



                                                            

    render(){
       // console.log(this.state.product,"log from render")
        return(
            <>
            <h4>Product Listing</h4>
            {
                this.state.product.length>0
                ?
                <div className="pList">
                {this.state.product.map((eachObject,index)=>{
                    const{description,title,thumbnail,price} = eachObject;
                    return(
                        <div className="card">
                        <h3>{title}</h3>
                        <h4>{description}</h4>
                        <img src={thumbnail}  alt="" width={200} height={200}/>
                        <h5 style={{color:"red"}} >₹{price}</h5>
                        <h3>Count {this.state.Count}</h3>
                        <button onClick={()=>this.deleteProduct(index)}>Delete</button>
                        <button onClick={()=>this.updateProduct(eachObject.id)}>Update</button>
                        <button>Increase</button>
                        <button>Decrement</button>
                        </div>
                    )
                })}

                </div>
                :
                <h4>No products</h4>
            }
            </>

           
        );
    }



}
export default FridayTask;