import React from "react";
import Navbar from "./Navbar";
import homescreenpage1continutionimg from "../assets/homescreenpage1continutionimg.jpeg";
const Home = () => {
    return (

        <div className="text-black min-h-screen bg-gradient-to-r from-[#0491E9] to-[#436C86] ">
            <h1>  </h1>
<Navbar />

            <div className=" min-h-screen w-full">
                <div className="text-black :text font-extrabold md:text-8xl pt-15 text-white ">
                    <h1> SEND AND SPEND<br/> MONEY WORLDWISE </h1>
                </div>
                <br/>
                <br/>
                <div className="text-black :text font-semibold text-white "><p className="text-2xl">Save on hidden conversion fees when you
                    use your <br/>Wise Travel card or send money abroad.</p></div>
                <br/>
                <br/>

                <button className="bg-white px-8 py-3 rounded-full font-bold text-xl ">
                <span className="inline-block bg-gradient-to-r from-[#0491E9] to-[#436C86] bg-clip-text text-transparent">
                        SIGN UP IN MINUTES
                </span>
                </button>


                <img
                    src={homescreenpage1continutionimg}
                    alt="continuation"
                    className="absolute left-2/4 -translate-x-1/2 bottom-[-65vh] h-[85vh] object-cover pointer-events-none "
                />

            </div>
        </div>
    );

}

export default Home;