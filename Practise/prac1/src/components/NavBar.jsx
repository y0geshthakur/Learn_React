import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div className='flex justify-end bg-black text-white pr-4 gap-10 h-10 items-center'>
      <NavLink className={({ isActive }) =>`px-3 py-1 transition duration-300 ${isActive ? "text-gray-400" : "text-white"} hover:bg-white hover:text-black rounded`} to={'/'}>Home</NavLink>
      <NavLink className={({ isActive }) =>`px-3 py-1 transition duration-300 ${isActive ? "text-gray-400" : "text-white"} hover:bg-white hover:text-black rounded`} to={'/projects'}>Projects</NavLink>
      <NavLink className={({ isActive }) =>`px-3 py-1 transition duration-300 ${isActive ? "text-gray-400" : "text-white"} hover:bg-white hover:text-black rounded`} to={'/contact'}>Contact</NavLink>
    </div>
  )
}

export default NavBar
