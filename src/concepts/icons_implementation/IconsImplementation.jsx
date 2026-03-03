import { FaHome } from "react-icons/fa";
import { SiSpacex } from "react-icons/si";
import CHERRY from "../../assets/cherryblossom.jpg"


const IconsImplementation=()=>{
    return(
        <div>
           <h1><FaHome size={100} color='red' fill='green'  /></h1>
           <h1>
            <SiSpacex />
           </h1>
        <img src={CHERRY} alt="" width={600} />
</div>
    )
}
export default IconsImplementation