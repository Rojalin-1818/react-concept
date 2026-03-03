const ChildCard=({info:{name,age,jerseyno,country,gender,specialist,imgurl,pickupline}})=>{
    return(
        <div className="display_profile">
            <div  className={`head ${specialist==="Batsman"?"green": specialist==="Fast Bowler"? "yellow":specialist==="All-Rounder"?"red":""}`}></div>
            <div className="container">
                <div className="img"><img src={imgurl} alt="" /></div>

                <h1>{name}</h1>
                <p>Age :{age}</p>
                <p>jersey-no: {jerseyno}</p>
                <p>country: {country}</p>
                <p>gender: {gender}</p>
                <p>specialist: {specialist}</p><br />

                <div className="pl">{pickupline}</div>


            </div>
             



        </div>
       
    )
}
export default ChildCard;