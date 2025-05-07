import { IoClose, IoPersonCircle } from "react-icons/io5";
import { logo } from "../assets";
import { BiLogOut } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link , useNavigate } from "react-router";

const Nav = () => {
    // Data Profile
    const [profile ,setProfile] = useState(false);
    // Name Logined
    const Fname = JSON.parse(localStorage.getItem("user")).Fname || "User";
    const Lname = JSON.parse(localStorage.getItem("user")).Lname || "Name";
    const email = JSON.parse(localStorage.getItem("user")).Email || "Email@gmail.com";
    // Open And Close Bar
    const [bar , setBar] = useState(false);
    // Links
    const Links = [
        { id: 0 , name: "Dashboard" , to: '/dashboard'},
        { id: 1 , name: "Staf" , to: 'staf'},
        { id: 2 , name: "Appointment", to: 'appointment' },
        { id: 3 , name: "Pharmacy" , to: 'pharmacy'},
        { id: 4 , name: "Logout" , to: '/'},
    ]
    // Logout
    const navigate = useNavigate();
    const Logout = (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate("/");
        },1000);
    }
    return (
        <nav className="bg-white fixed w-full z-100">
            <div className="container mx-auto! px-[5%]! grid grid-cols-3">
                <div className="flex items-center gap-2">
                    {!(location.pathname === "/dashboardpaitent" || location.pathname === "/dashboardstaf") &&
                        (!bar ? <FaBars onClick={() => setBar(true)} className="cursor-pointer hover:text-[#9083D5] transtion duration-300" size={30}/> :
                        <IoClose onClick={() => setBar(false)} className="cursor-pointer text-[#9083D5] hover:text-black transtion duration-300" size={30}/>)
                    }
                    <BiLogOut onClick={Logout} className="text-black cursor-pointer" size={30}/>
                    <span className="font-bold text-[#9083D5]">Logout</span>
                </div>
                <div className="flex items-center justify-center">
                    <img className='w-18 h-full' src={logo} alt="Image-Error" loading="lazy"/>
                    <span className="font-bold text-[20px] hidden md:flex">Tiba Care</span>
                </div>
                <div className="flex items-center justify-end gap-2">
                    {profile ? <IoPersonCircle className="text-[#9083D5] cursor-pointer" onClick={() => setProfile(false)} size={30}/> :
                        <IoPersonCircle className="cursor-pointer" onClick={() => setProfile(true)} size={30}/>
                    }
                    {profile ? <span onClick={() => setProfile(false)} className="font-bold text-black cursor-pointer">{Fname} {Lname}</span> :
                        <span onClick={() => setProfile(true)} className="font-bold text-[#9083D5] cursor-pointer">{Fname} {Lname}</span>
                    }
                </div>
            </div>
            <div className="container mx-auto! px-[5%]!">
                <div className="flex justify-end w-full">
                    {profile && <div className="flex flex-col gap-1 p-4! mt-1! bg-white border-1 border-[#9083D5] rounded fixed z-100">
                        <span className="text-[#9083D5]">{Fname} {Lname}</span>
                        <span className="text-blue-600">{email}</span>
                        <button className="text-white py-1! bg-[#9083D5] hover:bg-[#6c56db] transition duration-300 rounded cursor-pointer">Show Profile</button>
                    </div>
                }
                </div>
                <div className={`transform ${bar ? "translate-x-0" : "translate-x-[-500px]"} duration-500 fixed z-100`}>
                    <div className="bg-[#9083D5] h-screen text-white w-55 rounded p-4! flex flex-col gap-2">
                        {Links.map(link => (
                            <Link onClick={() => setBar(false)} className="text-[17px] font-bold hover:bg-[#C5DCFF] hover:text-black p-2! transition duration-300 rounded" key={link.id} to={link.to}>{link.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav