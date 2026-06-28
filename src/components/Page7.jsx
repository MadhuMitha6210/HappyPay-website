import React from 'react';
import lockpage7 from '../assets/lockpage7.png';
import peoplepage7 from '../assets/peoplepage7.png';
const Page7 = () => {
    return (
        <div className="text-left" >

        <div className="flex">
        <div className="md:w-3/5 space-y-[30px] ml-[35px]">

            <div className= "text-black :text font-extrabold  text-5xl ">
                <h1> SAFE AT EVERY STEP</h1>
            </div>


            <p className="text-[20px]">10,000 wise customers join dialy every month10,000 wise custoers join dialy every month</p>

            <hr className="border-gray-400 opacity-30"/>

            <div className="flex gap-4">
                <img className="h-10 w-10" src={peoplepage7} alt="people image" />
                <p className="text-[20px]">With our dedicated team in India, your money is protected from your doorstep.</p>
            </div>

            <hr className="border-gray-400 opacity-30"/>

            <div className="flex gap-4">
                <img className="h-10 w-10" src={peoplepage7} alt="people image" />
                <p className="text-[20px]">Our specialist anti-fraud and security teams partner with cutting-edge tech to beat thieves.</p>
            </div>

            <hr className="border-gray-400 opacity-30"/>

            <div className="flex gap-4">
                <img className="h-10 w-10" src={peoplepage7} alt="people image" />
                <p className="text-[20px]">Regulated nationwide, with 70 licences worldwide to keep your money moving.</p>
            </div>
        </div>

         <div className="md:w-2/5 ">
         <img className="h-[470px] w-[430px] items-center" src={lockpage7} alt="lock image"/>
         </div>

        </div>

            <button className="bg-[#9fe870] rounded-2xl text-2xl ml-[35px]"><pre>  Learn about sending money  </pre></button>
        </div>
    )
}
export default Page7;