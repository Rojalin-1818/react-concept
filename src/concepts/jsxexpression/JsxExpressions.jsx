const JsxExpressions = ()=>{

    let username="my name is Rojalin"

    let demo=()=>{
        console.log("Hello this is demo function")
    }

    let arr=['mala','sheela','shakila']

    let theme=true
    if(theme===true)
    {
        console.log("am a good girl")
    }
    else{
        console.log("am a bad girl")
    }

    return(
        <div>
        <h1>{username}</h1>

        <button onClick={demo}>Click</button>
        
        {
        arr.map((ele)=>{
            return <h1>{ele}</h1>
        }
        )
    }
    {
        theme?<h1>Hello</h1>:<h1>Hii</h1>
    }

        </div>
    )
}
export default JsxExpressions;