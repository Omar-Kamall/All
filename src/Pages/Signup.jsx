import { useState , useEffect } from 'react';
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import Swal from 'sweetalert2';

const Signup = () => {
    const [showNum , setShowNum] = useState(false);
    const [showNum2 , setShowNum2] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowNum(false);
            setShowNum2(false);
        },2000)
    })
    const handle = (event) => {
        event.preventDefault();
        const fname = event.target.fristname.value.trim() ;
        const lname = event.target.lastname.value.trim() ;
        const Email = event.target.email.value.trim() ;
        const tel = event.target.tel.value.trim() ;
        const Nic = event.target.nic.value.trim() ;
        const Date = event.target.date.value.trim() ;
        const Address = event.target.address.value.trim() ;
        const Gender = event.target.gender.value.trim() ;
        const Password = event.target.password.value.trim() ;
        const confirmPassword = event.target.confirmpassword.value.trim() ;
        if(!fname || fname.length < 2)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Frist Name",
            });
        else if(!lname || lname.length < 2)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Last Name",
            });
        else if(!Email || Email.indexOf("@") == -1 || Email.length < 11)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Compelete Your Email",
            });
        else if(!tel || tel.length < 11)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Compelete Your Mobile Number",
            });
        else if(!Nic || Nic.length < 14)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Compelete Your NIC",
            });
        else if(!Date)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Your Date Of Birth",
            });
        else if(!Address)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Your Address",
            });
        else if(!Gender)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Compelete Gender",
            });
        else if(!Password || Password.length < 8)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Compelete Password",
            });
        else if(!confirmPassword || confirmPassword != Password)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Compelete Confirm Password",
            });
        else{
            Swal.fire({
                icon: "success",
                title: "Rigster Sucssesfuly ....",
            });
            event.target.reset();
        }
    }
    return (
        <section>
            <form onSubmit={handle}>
                <div className="loading mx-12! lg:mx-50! pt-18! pb-20!">
                    <div className="container mx-auto!">
                        <h1 className="font-bold text-2xl flex justify-center mb-2!">Sign Up</h1>
                        <p className="font-bold text-gray-400 text-2xl flex justify-center mb-5!">Please Sign Up To Continue</p>
                        <div className="grid grid-cols-1 gap-1">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" name="fristname" placeholder="Frist Name" />
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" name="lastname" placeholder="Last Name" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" name="email" placeholder="Email" /> 
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="tel" name="tel" placeholder="Modile Number" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="number" name="nic" placeholder="NIC" />
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="date" name="date" placeholder="Date Of Birth" />
                            </div>
                            <div className="grid grid-cols-1">
                            <textarea className="h-35 p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" name="address" placeholder="Address Or Location"></textarea>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                <select name="gender" className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500">
                                    <option value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Custom">Custom</option>
                                </select>
                                <div className="relative grid grid-cols-1">
                                    <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type={!showNum ? "password" : "text"} name="password" placeholder="Password" />
                                        {showNum ? <BiSolidHide onClick={() => setShowNum(false)} className="absolute mr-4! right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" color="gray" size={25}/>:
                                        <BiSolidShow onClick={() => setShowNum(true)} className="absolute mr-4! right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" color="gray" size={25}/>
                                        }
                                </div> 
                                <div className="relative grid grid-cols-1">
                                    <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type={!showNum2 ? "password" : "text"} name="confirmpassword" placeholder="Confirm Password" />
                                        {showNum2 ? <BiSolidHide onClick={() => setShowNum2(false)} className="absolute mr-4! right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" color="gray" size={25}/>:
                                        <BiSolidShow onClick={() => setShowNum2(true)} className="absolute mr-4! right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" color="gray" size={25}/>
                                        }
                                </div> 
                            </div>
                            <div className="flex justify-center mt-4!">
                                <input className="px-30! py-2! cursor-pointer text-white bg-[#c5baff] hover:scale-105 hover:bg-[#B7B7B7] shadow-black shadow-2xl rounded-2xl transition duration-600" type="submit" value="Register" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Signup