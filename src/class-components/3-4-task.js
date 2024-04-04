import { Component } from "react";


class Products extends Component{
    state={
        product:[
            {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            },
            {
                "id": 2,
                "title": "Mens Casual Premium Slim Fit T-Shirts ",
                "price": 22.3,
                "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "rating": {
                    "rate": 4.1,
                    "count": 259
                }
            }]
    }

    addProduct=()=>{
        const newProduct=[...this.state.product,"new Product"]
        this.setState(
            {
                product:newProduct
            }
        )
    }

    deleteProduct=(index)=>{
     const newProduct=  this.state.product.filter((eachproduct,i)=>i!==index)
    this.setState(
        {
            product:newProduct
        }
    )
    }

    updateProduct=(index)=>{
        const newProduct=this.state.product.map((eachproduct,i)=>{
            if(i==index){
                return "newproduct"
            }
            else{
                return eachproduct
            }
        })
        console.log(newProduct)
        this.setState(
            {
                product:newProduct
            }
        )
    }





    render(){
        return(
            <>
            <button onClick={this.addProduct}>Add</button>
        
        
            { 
            this.state.product.map((val,index)=>{
                return(
                    <>
                    
                    <h1>{val.id}</h1>
                    <button onClick={()=>this.deleteProduct(index)}>Delete</button>
                    <button onClick={()=>this.updateProduct(index)}>update</button> 
                    </>
                )

            })
            
            
            }

             
             
        </>
        
        )
    }
}
export default Products;