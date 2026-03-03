import Child from "./Child"
const Parent=()=> {
    return(
        <div id='parent' className="parent">

            <Child name="Rojalin" age={22} email="rojalin@gamil.com"/>
            <Child name="Prajukata" age={28} email="prajukta@gamil.com"/>

            <Child name="sarmil" age={26} email="sarmil@gamil.com"/>

        </div>
    )
}
export default Parent