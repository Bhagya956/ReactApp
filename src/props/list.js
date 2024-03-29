import ListItems from "./listItems"



const ListComponent=()=>{
    const listItems=[{
        name:"apple",
        type:"fruit",
        id:1
    },{
        name:"banana",
        type:"fruit",
        id:2
    },{
        name:"potato",
        type:"vegitable",
        id:2
    }]

    return(
        <>
        <ol>
            {
                listItems.map((eachObject)=>{
                    return(
                        // <li>{eachObject}</li>
                        <ListItems name={eachObject.name}/>

                    )
                })
            }
        </ol>
        </>
    )


}
export default ListComponent;