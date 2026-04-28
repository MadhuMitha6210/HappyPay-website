import React from "react";
import indiacircle from "../../assets/indiacircle.png";

const Buttons = () => {
    return (
        <div>
            <button className="bg-gray-400 flex  h-6 w-25 rounded-3xl gap-3 items-center"> <img className="h-5 w-7  pl-2" src={indiacircle} alt="indian flag" /> <p className="text-xl ">  INR  </p> </button>

        </div>
    )
}
 export default Buttons;