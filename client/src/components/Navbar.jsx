import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
 
  return (
    <div className="border bg-slate-100">
      <div className="flex justify-around p-4">
        <div className="flex items-center text-3xl gap-2 font-bold text-[#171717]">
        <img src={logo} alt=""/>
        <p>SHOPPER</p>
        </div>

        <ul className="flex items-center list-none gap-10 text-[#626262] text-lg font-semibold hover:cursor-pointer ">
          <li className="hover:text-orange-400"><Link to='/'>shop</Link></li>
          <li className="hover:text-orange-400"><Link to='/men'>men</Link></li>
          <li className="hover:text-orange-400"><Link to='/women'>women</Link></li>
          <li className="hover:text-orange-400"><Link to='/kids'>kids</Link></li>
          
        </ul>

        <div className="flex items-center text-[#626262] text-lg font-semibold ">
          <Link to='/login'><button className="border rounded-3xl px-4 py-2 hover:bg-orange-400 hover:text-white" >Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt=""/></Link>
          <div className="w-5 h-5 flex justify-center items-center mt-[-35px] bg-orange-400 text-white rounded-2xl ml-[-12px]">0</div>
        </div>

      </div>
    </div>
  )
}

export default Navbar