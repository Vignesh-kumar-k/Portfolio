import Heroimg from "../assets/hero.png"
import {SiGmail} from "react-icons/si";
import {FaGithub} from "react-icons/fa";
import {AiOutlineLink, AiOutlineLinkedin} from "react-icons/ai";
import react from "@heroicons/react"
export default function Hero(){
    return <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
        <div className="md:w-1/2 flex flex-col">
            <h1 className="text-white text-6xl font-hero-font">HI <br/> Im vignesh
                <p className="text-2xl">A passionate developer always learning.</p>
            </h1>
            <div className="flex py-8">
                <a href="#" className="pr-5 hover:text-white"><AiOutlineLinkedin size={40}/></a>
                <a href="#"  className="pr-5 hover:text-white"><SiGmail size={40}/></a>
                <a href="#" className="hover:text-white"><FaGithub size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src={Heroimg}/>
    </section>
}