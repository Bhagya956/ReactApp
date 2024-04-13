import { useState } from "react"




const ControlledComponent=()=>{
    const [username,setuserName]=useState("")
    const [password,setPassword]=useState("")
    const [userNameErr,setuserNameErr]=useState("")

    

    const userNameHandler=(event)=>{
        const userName=event.target.value

        setuserName(userName)

        if(userName.trim().length>6){
            //alert("input must be less than 6")
            setuserNameErr("input must be less than 6")
        }
        else{
            setuserNameErr(null)

        }




        console.log(userName)

    }

    const PasswordHandler=(event)=>{
        const Password=event.target.value

        setPassword(Password)

        console.log(Password)

    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        // console.log(username)
        // console.log(password)

        const userDetails={
            username:username,
            password:password,
            id:Math.random()
        }
        console.log(userDetails)

    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>UserName</label>
            <input type="text"
            value={username}
            onChange={userNameHandler}/>
            {
                userNameErr && <span style={{color:"red"}}>Invalid username</span>
            }


            <label>Password</label>
            <input type="password"
            value={password}
            onChange={PasswordHandler}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default ControlledComponent;