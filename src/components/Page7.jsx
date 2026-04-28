import React from 'react';
import lockpage7 from '../assets/lockpage7.png';
import peoplepage7 from '../assets/peoplepage7.png';
const Page7 = () => {
    return (
        <div>

        <div className="flex">
        <div className="md:w-3/5 justify-items-start space-y-7">

            <div className= "text-black :text font-extrabold  text-5xl ">
                <h1> SAFE AT EVERY STEP</h1>
            </div>


            <p className="text-[20px]">10,000 wise customers join dily every month10,000 wise custoers join dily every month</p>

            <div className="flex gap-4">
                <img className="h-10 w-10" src={peoplepage7} alt="people image" />
                <p className="text-[20px]">10,000 wise customers join dialy every month10,000 wise customers join dialy every month</p>
            </div>

            <div className="flex gap-4">
                <img className="h-10 w-10" src={peoplepage7} alt="people image" />
                <p className="text-[20px]">10,000 wise customers join dialy every month10,000 wise customers join dialy every month</p>
            </div>

            <div className="flex gap-4">
                <img className="h-10 w-10" src={peoplepage7} alt="people image" />
                <p className="text-[20px]">10,000 wise customers join dialy every month10,000 wise customers join dialy every month</p>
            </div>
        </div>

         <div className="md:w-2/5 items-center ">
         <img className="h-[10] w-[20]" src={lockpage7} alt="lock image"/>
         </div>

        </div>
         <button className="bg-[#9fe870] rounded-2xl text-2xl"><pre>  Learn about sending money  </pre></button>



        </div>
    )
}
export default Page7;