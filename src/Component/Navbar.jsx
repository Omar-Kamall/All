import { useState } from 'react';
import { Link , useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { logo } from '../assets';
import { img7 } from '../assets';

const Navbar = () => {
    const location = useLocation();
    const Hide_Signin = location.pathname === '/signin';
    const Hide_Register = location.pathname === '/signup';
    const [bar , setBar] = useState(false);
    const link = [
        { id: 0 , name: "Home" , to: '/'},
        { id: 1 , name: "About" , to: '/about'},
        { id: 2 , name: "Serveices", to: '/serveices' },
        { id: 3 , name: "Appointment" , to: '/appinetment'},
        { id: 4 , name: "Contact Us" , to: '/contactus'},
    ]
    return (
        <>
            <nav className='bg-white h-[72px] w-full fixed z-20'>
                <div className='mx-5! mb-5!'>
                    <div className='container mx-auto! flex items-center justify-between'>
                        <div className='flex items-center'>
                            <Link to={'/'}><img className='w-18 h-full' src={logo} loading='lazy' alt={img7}/></Link>
                            <Link to={'/'} className='font-bold font-mono text-2xl mx-0! hover:text-[#9083D5] transition duration-400'>Tiba Care</Link>
                        </div>
                        <div className='hidden lg:flex'>
                            {link.map(link => (
                                <Link className='font-bold text-[17px] p-2! mx-3! rounded hover:bg-[#9083D5] transition duration-400' key={link.id} to={link.to}>{link.name}</Link>
                            ))}
                        </div>
                        <div className='hidden lg:flex gap-2'>
                            {!Hide_Signin && <Link to={'/signin'}><button className='bg-[#B7B7B7] hover:scale-105 shadow-black shadow-2xl px-5! py-2! font-bold rounded-3xl cursor-pointer hover:bg-[#9083D5] transition duration-400'>Sign In</button></Link>}
                            {!Hide_Register && <Link to={'/signup'}><button className='bg-[#9083D5] hover:scale-105 text-white shadow-black shadow-2xl px-4! py-2! font-bold rounded-3xl cursor-pointer hover:bg-[#B7B7B7] transition duration-400'>Register</button></Link>}
                        </div>
                        <div className="lg:hidden">
                            {!bar ? <FaBars onClick={() => setBar(true)} className='cursor-pointer hover:text-[#9083D5] transition duration-400' size={35}/> :
                            <span onClick={() => setBar(false)} className='cursor-pointer px-3! py-2! font-bold hover:bg-[#9083D5] transition duration-400 rounded-full'>X</span>
                            }
                        </div> 
                    </div>
                    <div className={`container mx-auto! lg:hidden transform : ${bar ? 'translate-x-0' : 'translate-x-full'} duration-400`}>
                        <div className='bg-[#C5DCFF] h-[93vh] w-[250px] right-0 z-20 rounded fixed'>
                            <div className="p-3!">
                                {link.map(link => (
                                    <Link className='flex flex-col font-bold p-3! hover:bg-[#9083D5] transition duration-400 rounded' key={link.id} to={link.to}>{link.name}</Link>
                                ))}
                            </div>
                            <div className="flex justify-center gap-5 mt-4!">
                                {!Hide_Signin && <Link to={'/signin'}><button className='bg-[#B7B7B7] text-white px-5! py-2! font-bold rounded-3xl cursor-pointer hover:scale-105 hover:bg-[#9083D5] transition duration-400'>Sign In</button></Link>}
                                {!Hide_Register && <Link to={'/signup'}><button className='bg-[#9083D5] text-white px-4! py-2! font-bold rounded-3xl cursor-pointer hover:scale-105 hover:bg-[#B7B7B7] transition duration-400'>Register</button></Link>}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar