import { Component } from "react";



class Fruit extends Component{
    state={
        fruits:["apple","banana"]
    }

    addFruits=()=>{
      const newFruits= [...this.state.fruits,"new Fruit"]
      this.setState(
        {
            fruits:newFruits


        }
      )
    }

    deleteFruit=(index)=>{
        console.log(index)

     const newFruits=  this.state.fruits.filter((eachFruit,i)=>i!==index) 
     console.log(newFruits)
     this.setState(
        {
            fruits:newFruits

        }
     )
    }

    updateFruit=(index)=>{
        const newFruits=this.state.fruits.map((eachElement,i)=>{
            if(i===index){
                return "pineApple"
            }
            else{
                return eachElement
            }
        })
        console.log(newFruits)
        this.setState(
            {
                fruits:newFruits
            }
        )
        
    }

    



    render(){
        return(
            <>
            <button onClick={this.addFruits}>Add</button>
            <ol>
            {
                this.state.fruits.map((eachElement,index)=>{
                    return(
                        <>

                        <li>
                            {eachElement}
                            </li>
                            
                            <button onClick={()=>this.deleteFruit(index)}>Delete</button>
                            <button onClick={()=>this.updateFruit(index)}>update</button>
                            
                            </>
                            

                    )
                })
            }
            </ol>
         
            </>
            )
        
    }
}
export default Fruit;