import {FaBars,FaTimes, FaGithub, FaLinkedin,FaWhatsapp} from "react-icons/fa";
import { HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md"

import logo from '../assets/apolos-logo.png'
import {useState} from "react";


export const Navbar = () =>{

    const [nav, setNav] = useState(false);
    const handleClick = ():void => setNav(!nav);

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#161616] text-gray-300 shadow-xl">
            <div>
                <img src={logo} alt='logo img' style={{width: '50px'}} />
            </div>
            {/** Menu **/}
                <ul className="hidden md:flex" >
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>

            {/** Hamburger **/}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars/> :<FaTimes/> }
            </div>

            {/**Mobile menu **/}
            <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-5 text-4xl" >Home</li>
                <li className="py-5 text-4xl" >About</li>
                <li className="py-5 text-4xl" >Skills</li>
                <li className="py-5 text-4xl" >Work</li>
                <li className="py-5 text-4xl" >Contact</li>
            </ul>

            {/** Social icons **/}
            <div className="hidden lg:flex fixed  flex-col top-[35%] left-[0] w-[60px] ">
                    <ul>
                        <li className='w-[60px] h-[40px] flex items-center justify-center p-0 bg-[#0b64c3]'>
                            <a href="https://www.linkedin.com/in/miner-lozano-becerra-22b265198/" target="_blank">
                            <FaLinkedin size={30} className=' transform transition duration-300 hover:scale-110'/>
                            </a>
                        </li>

                        <li className='w-[60px] h-[40px] flex items-center  justify-center p-0  bg-[#161B22]'>
                            <a href="https://github.com/Apolosmllb" target="_blank">
                            <FaGithub size={30} className=' transform transition duration-300 hover:scale-110'/>
                            </a>
                        </li>

                        <li className='w-[60px] h-[40px] flex items-center justify-center p-0 bg-[#14a92e]'>
                            <a href="https://api.whatsapp.com/send?phone=943127341&text=Hola Miner!" target="_blank">
                            <FaWhatsapp size={30} className=' transform transition duration-300 hover:scale-110'/>
                                </a>
                        </li>

                        <li className='w-[60px] h-[40px] flex items-center justify-center p-0  bg-[#d71d4f]'>
                            <a href="mailto:minermllb@gmail.com">
                            <MdOutlineEmail size={30} className=' transform transition duration-300 hover:scale-110'/>
                            </a>
                        </li>

                    </ul>
            </div>

        </div>
    )
}