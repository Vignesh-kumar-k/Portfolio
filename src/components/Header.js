import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header(){
    const[toggleMenu,setToggleMenu] = useState(false);
    return <header className="flex justify-between px-4 py-2 bg-primary">
        <a href="" className="font-bold text-black">Vignesh Kumar</a>
        <nav className="hidden md:block">
            <ul className="flex text-white">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">Contact</a></li>
            </ul>
        </nav>
        { toggleMenu && <nav className="block md:hidden ">
            <ul className="flex flex-col text-white mobile-nav">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">Contact</a></li>
            </ul>
        </nav>}
        <button  onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='Text-white h-5'/></button>
    </header>
}