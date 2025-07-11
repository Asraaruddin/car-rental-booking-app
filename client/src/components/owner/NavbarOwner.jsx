import React from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const NavbarOwner = () => {
    const {user} =  useAppContext;

  return (
    <div className='flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-borderColor relative tranisition-all'>
<Link to='/' className='flex flex-col leading-tight'>
  <span className='text-xl font-extrabold tracking-wide text-primary italic'>
    A<span className='text-gray-800'>CarRental</span>
  </span>
  <span className='text-[10px] text-gray-500 uppercase tracking-widest'>Drive Your Dream</span>
</Link>
      <p >Welcome,{user?.name || "Owner"  }</p>
    </div>
  )
}

export default NavbarOwner
