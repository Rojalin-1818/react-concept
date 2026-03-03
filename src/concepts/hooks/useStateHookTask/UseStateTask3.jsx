import { useState } from "react"
import ChildUseState from "./ChildUseState"


const UseStateTask3 = () => {
  const [userData, setUserData] = useState([])

  const fdata = async () => {
    try {
      const response = await fetch("https://api.github.com/users")
      const res = await response.json()
      setUserData(res)
      alert("Data is fetched sucessfully !");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="fetch">
        <button onClick={fdata} >{userData.length===0? "fetch data": "Result"}</button>
    </div>
      <div className={`mainbox ${userData.length>0? "show": ""}`}>

      {
        userData.map((user) => (
          <ChildUseState data={user}/>

            
        ))
      }

    </div>
    </div>
    
  )
}

export default UseStateTask3
