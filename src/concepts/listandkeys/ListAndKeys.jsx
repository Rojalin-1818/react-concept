import { Fragment } from "react"

const ListAndKeys=()=>{
    let arr=['sundari','sheela','leela','urmila','shakila'
    ]
    return(
        <>
            {
                arr.map((ele,index)=>{
                    return(
                        <Fragment key={index}>
                            <h1>{ele}</h1>
                            <p>hello</p>
                        </Fragment>
                        
                    )
                })
            }
        </>
    )
}
export default ListAndKeys