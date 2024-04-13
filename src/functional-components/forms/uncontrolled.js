import { useRef } from "react"
import { useState } from "react"



const UncontrolledInput=()=>{
  const userNameRef =useRef("")
  const passwordRef =useRef("")
  const [errorVisible,setErrorVisible]=useState(false )

  const handleSubmit=(event)=>{ 
    event.preventDefault()
    console.log("user submitted")

    const userInput=userNameRef.current.value

    const userPassword=passwordRef.current.value

    
    
    if(userInput.length<5 && userPassword.length<5){
      setErrorVisible(true)
      // alert("username and password must be more than 5 characters")
    }
    else{
      setErrorVisible(false)
      console.log("submit form")
    }

  }

  
  



    return(
        <>
        <form onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={userNameRef}

    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      ref={passwordRef}

    />
  </div>
{
  errorVisible  &&   <span>username and password must be more than 5 characters</span>
}
  {/* <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label>  */}
   {/* </div>  */}
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

       
  
        </>
    )
}

export default UncontrolledInput;