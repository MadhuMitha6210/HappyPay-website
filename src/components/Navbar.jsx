import React from "react"
import logo from "../assets/happylogonav.png"
const Navbar = () => {
    return (
        <div className='flex flex-row gap-175'>
            <div className='flex flex-row gap-6'>
                <img src={logo} className=" w-25 h-10 pt-10px" alt='logo' />
<p>personal</p>
<p>platform</p>
            <p>bussiness</p>
            </div>
            <div className='flex flex-row gap-6'>
                <p>EN</p>
                <p>Help</p>
               <p>Log in</p>

            </div>
        </div>

    )

}
export default Navbar;