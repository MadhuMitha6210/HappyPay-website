import React from "react";
import indiacircle from "../../assets/indiacircle.png";
import { MdLockOpen } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";

const Buttons = () => {
    return (
        <div>

            <button className="flex items-center justify-center bg-gray-200 rounded-4xl">
                <div className="flex justify-center items-center">
                    <MdLockOpen />
                    Guaranteed for 24hrs
                    <IoIosArrowForward />
                </div>
            </button>

            <button className=" bg-gray-300  flex  h-6 w-25 rounded-3xl gap-3 items-center"> <img className="h-5 w-7  pl-2 " src={indiacircle} alt="indian flag" /> <p className="text-xl ">  INR  </p> </button>

            <div className="bg-blue-200 flex  justify-center items-center gap-2">
                   <IoPricetagsOutline className=" flex items-center h-5 w-4"/>
                   Sending over 25,000 USD or equivalent?  We'll discount our fee
            </div>

            <button className=" bg-gray-300  flex  h-6 w-25 rounded-3xl gap-3 items-center"> <img className="h-5 w-7  pl-2 " src={indiacircle} alt="indian flag" /> <p className="text-xl ">  INR  </p> </button>

            <button className="bg-[#9fe870] rounded-2xl text-lg font-semibold "><pre>  Send Money  </pre></button>




        </div>
    )
}
 export default Buttons;