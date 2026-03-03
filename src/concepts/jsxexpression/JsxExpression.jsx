import React, { use } from 'react'

const JsxExpression = () =>{
    //jsx expression is used to access the js variables or functions inside the jsx | html
    //syntax--->{}
    //how to use js functions || how to call js functions
    //if a fun is returning  a jsx element then only we called as a component if it is not returning any jsx element, then it is a js function.
    let username="sundari"
    //let username;

    let demo=()=>{
        console.log("demo function")
    }


    let is_active=true
    if(is_active===true){
        console.log("true block")
    }
    else{
        console.log("false block")
    }

    let arr=['sundari','mala','shakila']

    return (
        <div>
            <h1>{username}</h1>
            {username="leela"}
            <br />
            {username}


            {/* {
                 let val=20;
             }
    */}

            <button onClick={demo}>Click</button>

            {
                is_active?<h1>i am safe</h1> : <h1>i am dead</h1>
            }

           {/* { arr.map((user)=>{
                retrun(
                    <h1>{user}</h1>
                )
            })
        } */}

       {
        arr.map((ele)=>{
            return <h1>{ele}</h1>
        })
       }
            </div>
    )
             
}


export default JsxExpression;



//***notes ***//
//react use synthetic events just give the function name it will executed no need to call explicitly adding ()
//html use dom events | window events explicitly we need to call the function adding () and need to use lowercase
//inside a jsx expression if any conditional statement we use ternary operator
//inside a jsx expression if we want to iterate any object then we use map
// for each does not return value whereas map returns value
//map function will accept a callback fun as argument
