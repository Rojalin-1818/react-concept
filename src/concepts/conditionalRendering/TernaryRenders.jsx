const TernaryRenders=()=>{

    let arr=true
    let per=30
    let theme="dark"
    
    return(
    <div>
    
    
        {arr?<h1>Come here</h1>:<h1>go from here</h1>}

        {(per>90)?<h1>Grade A</h1>:(per<90 && per>50)?<h1>Grade B</h1>:<h1>Fail</h1>}

        <div className={`box ${theme==="dark"?"dark":"light"}`}></div>
    </div>
    )

}
export default TernaryRenders;