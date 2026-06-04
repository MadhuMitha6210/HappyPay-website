import React from "react";
import indiacircle from "../../assets/indiacircle.png";
import Buttons from "../Buttons/Buttons.jsx";
import Arrivalbox from "../Buttons/Arrivalbox.jsx";

const Box= () => {
return (
    <div className="bg-amber-50 rounded-4xl pt-6 pl-2 pb-2">

<Buttons/>
        <br/>

<Arrivalbox text="Arrives" description="By monday,Febuary 23" />
        <Arrivalbox text="Total fees" description="Included in INR amount"/>



    </div>
)
}
export default Box;