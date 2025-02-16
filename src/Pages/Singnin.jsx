import { useState , useEffect } from 'react';
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import Swal from 'sweetalert2';

const Singnin = () => {
    const [showNum , setShowNum] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowNum(false);
        },2000)
    })
    // const [fname , setFname] = useState('');
    // const [lname , setLname] = useState('');
    // const [email , setEmail] = useState('');
    // const [password , setPassword] = useState('');
    const handle = (event) => {
        event.preventDefault();
        const fName = event.target.fristname.value.trim();
        const lName = event.target.lastname.value.trim();
        const Email = event.target.email.value.trim();
        const Password = event.target.password.value.trim();
        if(!fName || fName.length < 2)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Frist Name",
            });
        else if(!lName || lName.length < 2)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Last Name",
            });
        else if(!Email || Email.indexOf('@') == -1 || Email.length < 11)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Compelte Your Email",
            });
        else if(!Password || Password.length < 8)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Compelte Your Password",
            });
        else{
            Swal.fire({
                icon: "success",
                title: "Signed Sucssesfuly ....",
            });
            event.target.reset();
        }
    }
    return (
        <section>
            <form onSubmit={handle}>
                <div className="loading mx-12! lg:mx-50! pt-18! pb-20!">
                    <div className="container mx-auto!">
                        <h1 className="font-bold text-2xl flex justify-center mb-2!">Sign In</h1>
                        <p className="font-bold text-gray-400 text-2xl flex justify-center mb-5!">Please Sign In To Continue</p>
                        <div className="grid grid-cols-1 gap-2">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" name="fristname" placeholder="Frist Name" />
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" name="lastname" placeholder="Last Name" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" name="email" placeholder="Email" />
                                <div className="relative grid grid-cols-1">
                                    <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type={!showNum ? "password" : "text"} name="password" placeholder="Password" />
                                    {showNum ? <BiSolidHide onClick={() => setShowNum(false)} className="absolute mr-4! right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" color="gray" size={25}/>:
                                    <BiSolidShow onClick={() => setShowNum(true)} className="absolute mr-4! right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" color="gray" size={25}/>
                                    }
                                </div>
                            </div>
                            <div className="flex justify-center mt-4!">
                                <input className="px-30! py-2! cursor-pointer text-white bg-[#c5baff] hover:scale-105 hover:bg-[#B7B7B7] shadow-black shadow-2xl rounded-2xl transition duration-600" type="submit" value="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Singnin