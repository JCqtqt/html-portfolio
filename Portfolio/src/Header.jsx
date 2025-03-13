import { Link } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { useState } from "react";

export default function Header(){
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="bg-white shadow-md shadow-black-300 text-lg">
            <div className='flex items-center h-24 max-w-[1240px] mx-auto px-4 justify-between'>
                <img className='w-25 h-16 m-8' src="\src\images\Joshlogo.png" alt="" />
                <ul className='hidden md:flex space-x-5 font-poppins font-semibold me-8'>
                <Link to={'/'} className='hover:text-yellow-500 duration-300 p-4'>Home</Link>
                <div className='border-l border-yellow-300'></div>
                <Link to={'/aboutme'} className='hover:text-yellow-500 duration-300 p-4'>About me</Link>
                <div className='border-l border-yellow-300'></div>
                <li className='hover:text-yellow-500 duration-300 p-4'>My Portfolio</li>
                <div className='border-l border-yellow-300'></div>
                <li className='hover:text-yellow-500 duration-300 p-4'>Contact me</li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <AiOutlineClose size={25}
                    /> : <AiOutlineMenu size={25}/>}
                </div>
                <div className={!nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-800 text-white z-10 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className="w-full text-3xl font-bold text-yellow-500 m-4">Josh.</h1>
                    <ul className="block pt-4 text-center uppercase">
                        <div className="border-b border-b-yellow-500 "></div>
                        <Link to={'/'} className='block p-4 hover:bg-yellow-500 duration-300 hover:text-black hover:font-bold'>Home</Link>
                        <div className="border-b border-b-yellow-500"></div>
                        <Link to={'/aboutme'} className='block p-4 hover:bg-yellow-500 duration-300 hover:text-black hover:font-bold'>About me</Link>
                        <div className="border-b border-b-yellow-500 "></div>
                        <Link to={'/myportfolio'} className='block p-4 hover:bg-yellow-500 duration-300 hover:text-black hover:font-bold'>My Portfolio</Link>
                        <div className="border-b border-b-yellow-500 "></div>
                        <Link to={'/contactme'} className='block p-4 hover:bg-yellow-500 duration-300 hover:text-black hover:font-bold'>Contact me</Link>
                        <div className="border-b border-b-yellow-500 "></div>
                    </ul>
                </div>
            </div>
        </div>
    )
}