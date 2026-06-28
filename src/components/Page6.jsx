import React from "react";
import page6startinghomelogo from "../assets/page6startinghomelogo.png";
import page1 from "../assets/page1.png";
const Page6 = () => {
    return (
    <div className=" flex flex-col mt-[100px] ">

         <p className="font-extrabold text-5xl mb-[30px]">Take control of your money</p>
<br/>

          <div className="flex items-center justify-around">

              <div className=" flex flex-row gap-4 ">
            <img className="rounded-full h-18 w-18 " src={page6startinghomelogo} alt="home logo"/>
            <div className="justify-center items-center pt-[25px] text-2xl">   Winner of best cross-Border FIN 2026</div>
              </div>

              <div className=" flex flex-row gap-4 ">
                  <img className="rounded-full h-18 w-18 " src={page6startinghomelogo} alt="home logo"/>
                  <div className="justify-center items-center pt-[25px] text-2xl">   Winner of best cross-Border FIN 2026</div>
              </div>

            <div className=" flex flex-row gap-4 ">
            <img className="rounded-full h-18 w-18 " src={page6startinghomelogo} alt="home logo"/>
            <div className="justify-center items-center pt-[25px] text-2xl">   Winner of best cross-Border FIN 2026</div>
        </div>

          </div>



    </div>
    )
}
export default Page6;