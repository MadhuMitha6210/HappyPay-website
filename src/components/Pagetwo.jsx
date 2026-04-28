import React from "react";
import page2 from "../assets/page2.png";

const Pagetwo = () =>{
    return(
        <div>


            <br/><br/>

            <div className="flex bg-[#F9FFF6]">
                <div className="w-4/7">
                    <div className="text-black :text font-extrabold text-5xl ">
                        <h1> Make your transfer count </h1>
                    </div>

                    <br/>
                    <br/>


                    <h4><p>Save up to 45% when you send money globally. Lightning-fast. Completely transparent.</p></h4>
                    <br/>
                    <div className="border-t-2 border-dashed border-b-gray-600 "></div><br/>


                    <h3><p>Pay international education costs</p></h3>
                    <br/>
                    <h6 className="">  Open doors for your loved ones' future.</h6> <br/>
                    <div className="border-t-2 border-dashed border-b-gray-600 "></div> <br/>

                    <h3>Make travelling simple</h3>
                    <br/>
                    <h6 className=""> Sort vacation and travel expenses</h6><br/>
                    <div className="border-t-2 border-dashed border-b-gray-600 "></div> <br/>
                    <h3>Give a helping hand when it's needed</h3>
                    <br/>
                    <h6 className=""> Give a helping hand when it's needed</h6>
                    <br/>
                    <button className=" bg-lime-300 ; rounded-2xl ; text-black;"> <pre>  Learn about sending money  </pre></button>
                </div>

                <div className="w-3/7 flex justify-center "><img src={page2} alt="imageofpage2"/> </div>

            </div>
        </div>
            );

            }
            export default Pagetwo;