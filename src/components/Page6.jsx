import React from "react";
import page6startinghomelogo from "../assets/page6startinghomelogo.png";
import page1 from "../assets/page1.png";
const Page6 = () => {
    return (
    <div className=" flex flex-col">
        <div className="bg-[#f9fff6]">
         <p className="font-extrabold text-5xl ">Take control of your money</p>
<br/>
          <div className="flex items-center gap-10">
            <img className="rounded-full h-7 w-8 gap-2" src={page6startinghomelogo} alt="home logo"/>
            <pre>Winner of best cross-Border FIN 2026</pre>

             <img className="rounded-full h-7 w-8" src={page6startinghomelogo} alt="home logo"/>
                <pre>Winner of best cross-Border FIN 2026</pre>

            <img className="rounded-full h-7 w-8" src={page6startinghomelogo} alt="home logo"/>
                <pre>Winner of best cross-Border FIN 2026</pre>
          </div>


        <div className="  flex mt-[5vw] ">

            <div className="w-[60vw] space-y-[4vw]">

                 <div className=" flex gap-4">
                    <img className="rounded-full h-7 w-8" src={page6startinghomelogo} alt="home logo"/>
                    <pre>Winner of best cross-Border FIN 2026 Winner of best cross-Border FIN 2026</pre>
                </div>

                <div className=" flex gap-4">
                    <img className="rounded-full h-7 w-8" src={page6startinghomelogo} alt="home logo"/>
                    <pre>Winner of best cross-Border FIN 2026 Winner of best cross-Border FIN 2026</pre>
                </div>

                <div className=" flex gap-4">
                    <img className="rounded-full h-7 w-8" src={page6startinghomelogo} alt="home logo"/>
                    <pre>Winner of best cross-Border FIN 2026 Winner of best cross-Border FIN 2026</pre>
                </div>

            </div>

                <div>
                   <img className=" flex-2/5 " src={page1} alt="page1pic"/>
                </div>
        </div>


        </div>
    </div>
    )
}
export default Page6;