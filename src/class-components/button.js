import { Component } from "react";
import Counter from "./counter";


class ButtonComponent extends Component{
    state={
        isSubscribe:true,
        text1:"Subscribe",
        text2:"Subscribed"
    }

    changeSubscribe=()=>{
        console.log("clicked")
        this.setState(
            {
                isSubscribe:!this.state.isSubscribe
            }
        )

    }


    render(){
        return(
            <>
            <button onClick={this.changeSubscribe }>{this.state.isSubscribe?this.state.text1:this.state.text2}</button>

            {
                this.state.isSubscribe
                ?
                <>
                <Counter/>
                <h3>Welcome user</h3>
                </>
                :
                <h3>Please subscribe to see the content</h3>

            }
            
            
            </>
        )
    }
}
export default ButtonComponent ;