

import { useState } from "react"




const ControlledComponent2=()=>{
  
   const [formErrors,setFormErrors]=useState(
    {
    usernameErr:null,
    passwordErr:null
   }
)

    const[form,setForm]=useState(
        {
            username:null,
            password:null
        }
    )

    const onChangeHandler=(event)=>{
        const{value,name}=event.target
        console.log(value,name);
        setForm(prevState=>({
            ...prevState,[name]:value
        }))
        switch(name){
            case "username":
                
                if(value.length>6){
                    setFormErrors(
                        {...formErrors,usernameErr:"enter less than 6"}


                    )
                }else{
                    setFormErrors(
                        {...formErrors,usernameErr:null}
                    )
                }
                break;
                case "password":
                
                if(value.length>6){
                    setFormErrors(
                        {...formErrors,passwordErr:"enter less than 6"}


                    )
                }else{
                    setFormErrors(
                        {...formErrors,passwordErr:null}
                    )
                }
                break;

           
              
        }
    }

    







    


    

    const handleSubmit=(event)=>{
        event.preventDefault()
       
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>UserName</label>
            <input type="text"
            value={form.username}
            onChange={onChangeHandler}
            name="username"
            />
            {
                formErrors.usernameErr && <span style={{color:"red"}}>Invalid username</span>
            }


            <label>Password</label>
            <input type="password"
            value={form.password}
            onChange={onChangeHandler}
            name="password"
            
            />
            
            <button type="submit">Submit</button>
            {
             formErrors.passwordErr && <span style={{color:"red"}}>Invalid paswword</span>
            }
        </form>
        </>
    )
}
export default ControlledComponent2;