import { Component } from "react";

class Fruit extends Component{
    state={
        fruit:["apple","banana"]
    }

    a=this.state.fruit.map((val)=>{
        console.log(val)
        return(val.fruit)
    })

    changeFruit=()=>{
        this.setState(
            {
                fruit:this.state.fruit.a

            }
        )
    }



    render(){
        return(
            <>
            <button onClick={this.changeFruit}>ADD</button>
            
            </>
        )
    }
}
export default Fruit;