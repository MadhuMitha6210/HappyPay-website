import React from "react";
import planecircle from "../../assets/planecircle.png";
const Arrivalbox = (props) => {
    return (
        <div>
           <div className="flex gap-3">
               <div className="flex items-center justify-center ">
                   <img className="h-6 w-6" src={planecircle} alt="point symbol"/>
               </div>
               <div className="flex flex-col items-start "> <div>
                   { props.text }<hr/>
               </div>{props.description}</div>


           </div>
        </div>
    )
}
 export default Arrivalbox;