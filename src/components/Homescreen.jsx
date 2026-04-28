import React from "react";
import Navbar from "./Navbar";
import homescreenpage1continutionimg from "../assets/homescreenpage1continutionimg.png";
const Home = () => {
    return (

        <div className="text-black ">
            <h1>  </h1>
<Navbar />

                     <div className=" bg-green-600 min-h-screen w-full">
            <div className="text-black :text font-extrabold text-5xl pt-15 pl-30 pr-30">
                <h1> SEND AND SPEND<br/> MONEY WORLDWISE </h1>
            </div>
                <br/>
                         <br/>
                <div><h6>Save on hidden conversion fees when you use your <br/>Wise Travel card or send money abroad.</h6></div>
<br/>
 <br/>                        <button className="bg-black : rounded-2xl : text-green-700"> <pre>  sign up in minutes  </pre>   </button>

                         <img
                             src= {homescreenpage1continutionimg}
                             alt="continuation"
                             className="absolute left-2/4 -translate-x-1/2 bottom-[-30vh] h-[55vh] object-cover pointer-events-none"
                         />
                      </div>
        </div>
    );

}

export default Home;