import React from "react"
import logo from "../assets/happylogonav.png"
const Navbar = () => {
    return (
        <div className='flex flex-row gap-175 mt-[10px]  mb-[10px] bg-white '>
            <div className='flex flex-row gap-6 text-lg'>
                <img src={logo} className=" w-30 h-15" alt='logo' />
<p>Personal</p>
<p>Platform</p>
            <p>Bussiness</p>
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