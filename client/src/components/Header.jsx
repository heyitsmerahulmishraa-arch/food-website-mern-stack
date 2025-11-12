import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping, FaUserGroup } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-cyan-800 text-white">
        <div className="headerContainer flex items-center justify-between max-w-[1200px] mx-auto px-4 py-2">
            <Link to={"/"} className='font-bold text-2xl'>Rahul mishra</Link>
            <ul className='flex gap-3'>
                <li>
                    <Link to={"/"} className='hover:text-neutral-500'>Home</Link>
                </li>
                <li>
                    <Link to={"/products"} className='hover:text-neutral-500'>Products</Link>
                </li>
                <li>
                    <Link to={"/category"} className='hover:text-neutral-500'>Category</Link>
                </li>
                <li>
                    <Link to={"/contact"} className='hover:text-neutral-500'>Contact Us</Link>
                </li>
            </ul>
            <div className="headersButton flex items-center gap-2">
                <Link to={"/profile"} className='text-[24px]'><FaUserGroup/></Link>
                <Link to={"/cart"} className='text-[24px]'><FaCartShopping/></Link>
            </div>
        </div>
    </header>
  )
}

export default Header