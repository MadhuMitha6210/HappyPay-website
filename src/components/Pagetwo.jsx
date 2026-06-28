import React from "react";
import page2 from "../assets/page2.png";

const Pagetwo = () =>{
    return(
        <div>


            <br/><br/>

            <div className="flex bg-[#F9FFF6]">
                <div className="w-6/11 space-y-20 text-left ml-[40px] ">
                    <div className="space-y-[13px] ">
                        <div className=" text-black :text font-extrabold text-5xl space-y-[13px]">
                            <h1> Make your transfer count </h1>
                        </div>

                        <div className="space-y-[13px]">
                        <h4><p className=" text-2xl "> Save up to 45% when you send money globally. Lightning-fast.
                            Completely transparent.</p></h4>

                        <hr className="border-gray-400 opacity-30"/>

                        <h3><p className=" text-2xl">Pay international education costs</p></h3>

                        <h6 className="text-2xl"> Open doors for your loved ones' future.</h6> <br/>
                        <hr className="border-gray-400 opacity-30"/>

                        <h3 className=" text-2xl">Make travelling simple</h3>

                        <h6 className="text-2xl"> Sort vacation and travel expenses</h6><br/>
                        <hr className="border-gray-400 opacity-30"/>

                        <h3 className=" text-2xl">Give a helping hand when it's needed</h3>

                        <h6 className="  text-2xl"> Support with medical bills</h6>
                    </div>
                    </div>
                    <div>
                    <button className=" bg-lime-400 ; rounded-3xl ; text-black text-2xl h-[50px]"> <pre>  Learn about sending money  </pre></button>
                </div>
                </div>
                <div className="w-5/11 flex justify-center "><img src={page2} alt="imageofpage2"/> </div>

            </div>
        </div>
            );

            }
            export default Pagetwo;