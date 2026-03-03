import Card from "./Card"

const DefaultPropsConcept=()=>{
    const data=[
        {
            username:"rojalin",
            age:21
        },
        {
            age:16
        },
        {
            username:"sheela"
        }
    ]
    // console.log(Boolean([]))
    // console.log(Boolean({}))
    // console.log(Boolean(""))
    // console.log(Boolean(23))
    // console.log(Boolean(undefined))
    // console.log(Boolean(null))
    // console.log(Boolean(NaN))
    return(
        <div>
            {
                data.map((ele)=>{
                    return (
                        <Card user={ele}/>
                    )
                })
            }
        </div>
    )
}
export default DefaultPropsConcept