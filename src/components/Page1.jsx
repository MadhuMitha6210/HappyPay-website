import React from "react";
import page1 from "../assets/page1.png";
 const Page1= () => {
     return (
         <div className="flex flex-row">

             <div className="md:w-1/2">
             <div className= "text-black :text font-extrabold text-7xl text-left pl-10 tracking-tighter">
                 <h1> SAVE ON YOUR TRAVELS ABROAD</h1>
             </div>
             <br/>

                 <div className="flex-col pl-10 text-left space-y-[60px] text-2xl ">
                    <div className=" space-y-[20px] ">
                     <h4><p >Make spending around the world simple when you pack your Wise Travel card.</p></h4>
                        <hr className="border-gray-400 opacity-30"/>
                     <h3><p className="text-left font-semibold">Get the mid-market rate exchange everytime</p></h3>
                     <h6> Pay at the rate you can casually check on Google, with no hidden fees..</h6>
                        <hr className="border-gray-400 opacity-30"/>

                     <h3 className="text-left font-semibold">Get the mid-market rate exchange everytime</h3>

                     <h6> Get the mid - market exchange rate every time Get the mid - market exchange
                         rate every time</h6>

                    </div>
                     <button className=" bg-lime-400 rounded-3xl text-black h-[7vh] mr-[50vh]">
                         <pre>  Learn about the wise travel card  </pre>
                     </button>
                 </div>
             </div>

             <div className="md:w-1/2 justify-items-center">
                 <img  className="  h-[550px] w-[400px]" src={page1}/>
             </div>


         </div>
     );

 }
export default Page1;