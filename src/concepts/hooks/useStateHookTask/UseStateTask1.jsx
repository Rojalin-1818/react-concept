import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdHeartBroken } from "react-icons/md";
import { IoHeartSharp } from "react-icons/io5";

const UseStateTask1 = () => {
  const [proposal, setProposal] = useState(<FaRegHeart />);

  const acceptProposal = () => {
    setProposal(<IoHeartSharp color="red" />);
  };

  const rejectProposal = () => {
    setProposal(<MdHeartBroken  color="red"/>);
  };

  const reset = () => {
    setProposal(<FaRegHeart />);
  };

  return (
    <div className="mainbox">
      <div className="box">
        
        {/* {
          proposal === null ? (
            <FaRegHeart />
          ) : proposal === true ? (
            <IoHeartSharp color="red" />
          ) : (
            <MdHeartBroken  color="red"/>
          )
        } */}

        <div className="heart">
            {
                proposal
            }
        </div>

        
        
            <div className="btnbox">
        <button onClick={acceptProposal} className="btn1">Accept</button>
        <button onClick={rejectProposal} className="btn2">Reject</button>
        <button onClick={reset} className="btn3">Change your mind</button>
            </div>
        
    
      </div>
    </div>
  );
};

export default UseStateTask1;
