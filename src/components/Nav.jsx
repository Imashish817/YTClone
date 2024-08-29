import React from 'react'
// const menu from "../assets/menu.png";
import hamburger from '../assets/menu.png';
import { useDispatch } from 'react-redux';
import { ToggleHamburger } from '../utils/AppSkice';
import { YT_LOGO, YT_SEARCH_ICON, YT_USER_ICON } from '../Constants';
import { Link } from 'react-router-dom';
const Nav = () => {
    const Dispach=useDispatch();
    const handleToggle=()=>{
        Dispach(ToggleHamburger());
    }
    return (
        <div className='p-4 shadow-xl grid grid-flow-col'>
            <div>
                <img onClick={handleToggle} className='h-7 w-auto col-span-1 my-1 cursor-pointer' src={hamburger} />
            </div>
            <div>
            <a href='/' ><img className='  w-44 col-span-1' src={YT_LOGO}/> </a>
            </div>
            <form className='flex col-span-10  justify-center align-middle'>
                 <input type='text' placeholder='Search' className='w-3/5 border border-gray-300 rounded-l-full px-5' />
                 <button className='border flex px-5 border-gray-300 rounded-r-full bg'>
                    <img className='h-10 py-1 my-auto' src={YT_SEARCH_ICON}/></button>
            </form>
            <div className=' '>
                <img className='w-8 col-span-1' src={YT_USER_ICON} />
            </div>

        </div>
    )
}

export default Nav