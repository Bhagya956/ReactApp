import {a} from "./task"

const ListShow=()=>{
   const b= a.filter(value=>value.category=="jewelery")
    return(
        <>
        {
            // a.map(value=>
            //     <h4>Category:{value.category}</h4>)


            b.map
            (value=>
       
        <img src={value.image} alt={""} width={100}/>)
    

        }
        </>
    )
}
export default ListShow