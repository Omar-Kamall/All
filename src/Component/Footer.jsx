import { Link } from "react-router"
import { img7, logo } from "../assets"
import { FaFacebook, FaPhoneAlt } from "react-icons/fa"
import { MdEmail , MdSms } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
    const link = [
        { id: 0 , name: "Home" , to: '/'},
        { id: 1 , name: "About" , to: '/about'},
        { id: 2 , name: "Serveices", to: '/serveices' },
        { id: 3 , name: "Appointment" , to: '/appinetment'},
        { id: 4 , name: "Contact Us" , to: '/contactus'},
    ]
    return (
        <footer className="mx-5! pb-8!">
            <div className="bg-gray-500 h-[2px] w-full mb-5! mt-5!"></div>
            <div className="container mx-auto! grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className='flex mx-0! mb-0!'>
                    <Link to={'/'}><img className='w-18' src={logo} loading='lazy' alt={img7}/></Link>
                    <Link to={'/'} className='font-bold font-mono text-2xl mt-5! hover:text-[#9083D5] transition duration-400'>Tiba Care</Link>
                </div>
                <div>
                    <h2 className="font-bold text-2xl mb-3!">Quick Links</h2>
                    {link.map(link => (
                        <Link className="font-bold flex my-1! text-gray-500 rounded hover:text-[#9083D5] transition duration-400" to={link.to} key={link.id}>{link.name}</Link>
                    ))}
                </div>
                <div>
                    <h2 className="font-bold text-2xl mb-3!">Hours</h2>
                    <p className="text-gray-500 hover:text-[#9083D5] transition duration-400">Sunday : 9:00 AM - 9:00 PM</p>
                    <p className="text-gray-500 hover:text-[#9083D5] transition duration-400">Monday : 9:00 AM - 9:00 PM</p>
                    <p className="text-gray-500 hover:text-[#9083D5] transition duration-400">Tuesday : 9:00 AM - 9:00 PM</p>
                    <p className="text-gray-500 hover:text-[#9083D5] transition duration-400">Thursday : 9:00 AM - 9:00 PM</p>
                    <p className="text-gray-500 hover:text-[#9083D5] transition duration-400">Wenesday : 9:00 AM - 9:00 PM</p>
                    <p className="text-gray-500 hover:text-[#9083D5] transition duration-400">Friday : 9:00 AM - 9:00 PM</p>
                </div>
                <div>
                    <h2 className="font-bold text-2xl mb-3!">Contact</h2>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt color="#9083D5" size={18}/>
                        <span className="text-gray-500 cursor-default hover:text-[#9083D5] transition duration-400">01006677452</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdEmail color="#9083D5" size={18}/>
                        <span className="text-gray-500 cursor-default hover:text-[#9083D5] transition duration-400">omar.k.0000000@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdSms color="#9083D5" size={18}/>
                        <span className="text-gray-500 cursor-default hover:text-[#9083D5] transition duration-400">01006677452</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaFacebook color="#9083D5" size={18}/>
                        <span className="text-gray-500 cursor-default hover:text-[#9083D5] transition duration-400">Omar Kamal</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaFacebook color="#9083D5" size={18}/>
                        <span className="text-gray-500 cursor-default hover:text-[#9083D5] transition duration-400">omar.k.0000000@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoLogoLinkedin color="#9083D5" size={18}/>
                        <span className="text-gray-500 cursor-default hover:text-[#9083D5] transition duration-400">omar.k.0000000@gmail.com</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer