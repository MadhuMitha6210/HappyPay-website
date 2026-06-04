import React from "react";
import Box from "./Minicomponents/Box.jsx";
const Page3 = ( ) => {
  return(
      <div className="bg-lime-600 h-[50vw] flex flex-row justify-center items-center gap-28">
         <div className="flex">
            <div className=" md:w-1/2 ">
                    <div className="text-4xl font-bold text-green-950">
                  100% transparent
                   </div>
                   <div className="">
                     Use our calculator to see how much more you’d get when you send money with Wise.
                   </div>


            </div>
                 <div className="md:w-1/2 ">
                 <Box/>
                 </div>
         </div>


</div>
  );
}


export default Page3;