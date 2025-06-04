import { useState , useEffect } from 'react';
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { SignIn } from '../Api/Auth';

const Signin = () => {
    // location
    const navigate = useNavigate();
    // Data Login
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    // Show And Hide Paeeword
    const [showNum , setShowNum] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNum(false);
        },2000)
        return () => clearTimeout(timer);
    },[showNum])
    // Kind Login
    const [role , setRole] = useState("");
    // Submit And Validationt
    const handlesubmit = async (event) => {
        event.preventDefault();
        const fName = firstName.trim();
        const lName = lastName.trim();
        const Email = email.trim();
        const Password = password.trim();
        if(!role)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Choose Kind",
            });
        else if(!fName || fName.length < 2)
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
            if(role === "Manger")
            {
                try{
                    const Token = await SignIn({role: "ADMIN" , email: Email , password: Password})
                    localStorage.setItem("token" , Token);
                    localStorage.setItem("user", JSON.stringify({ Fname: fName , Lname: lName , Email: Email }));
                    localStorage.setItem("role" , "Manger");
                    Swal.fire({
                                icon: "success",
                                title: "Signed Sucssesfuly ....",
                    });
                    navigate("/" , "Manger");
                    setFirstName("");setLastName("");setEmail("");
                    setPassword("");setRole("");
                }catch(error){
                    Swal.fire({
                        icon: "error",
                        title: `Error ${error}`,
                })}
            }
            else if(role === "Staf")
            {
                try{
                    const Token = await SignIn({role: "STAFF" , email: Email , password: Password});
                    localStorage.setItem("token" , Token);
                    localStorage.setItem("user", JSON.stringify({ Fname: fName, Lname: lName, Email: Email }));
                    localStorage.setItem("role" , "Staf");
                    Swal.fire({
                        icon: "success",
                        title: "Signed Sucssesfuly ....",
                    });
                    navigate("/" , "Staf");
                    setFirstName("");setLastName("");setEmail("");
                    setPassword("");setRole("");
                }catch(error){
                    Swal.fire({
                        icon: "error",
                        title: `Error ${error}`,
                })}
            }
            else if (role === "Patient")
            {
                try{
                    const Token = await SignIn({role: "USER" , email: Email , password: Password});
                    localStorage.setItem("token" , Token);
                    localStorage.setItem("user", JSON.stringify({ Fname: fName, Lname: lName, Email: Email }));
                    localStorage.setItem("role" , "Patient");
                    Swal.fire({
                            icon: "success",
                            title: "Signed Sucssesfuly ....",
                    });
                    navigate("/appinetment" , "Patient");
                    setFirstName("");setLastName("");setEmail("");
                    setPassword("");setRole("");
                }catch(error){
                    Swal.fire({
                        icon: "error",
                        title: `Error ${error}`,
                })}
            }
        }
    }
    return (
        <section>
            <form onSubmit={handlesubmit}>
                <div className="loading mx-12! lg:mx-50! pt-18! pb-20!">
                    <div className="container mx-auto!">
                        <h1 className="font-bold text-2xl flex justify-center mb-2!">Sign In</h1>
                        <p className="font-bold text-gray-400 text-2xl flex justify-center mb-2!">Please Sign In To Continue</p>
                        <div className="flex items-center justify-center mb-2! gap-5">
                            <div className='flex items-center gap-1'>
                                <input className='checked:border-gray-500 checked:bg-[#c5baff] border-1 border-gray-400 rounded-full w-3 h-3 appearance-none cursor-pointer' onChange={() => setRole("Staf")} type="radio" name="role" id="Staf" />
                                <label className='cursor-pointer' htmlFor="Staf">Staf</label>
                            </div>
                            <div className='flex items-center gap-1'>
                                <input className='checked:border-gray-500 checked:bg-[#c5baff] border-1 border-gray-400 rounded-full w-3 h-3 appearance-none cursor-pointer' onChange={() => setRole("Manger")} type="radio" name="role" id="Manger" />
                                <label className='cursor-pointer' htmlFor="Manger">Manger</label>
                            </div>
                            <div className='flex items-center gap-1'>
                                <input className='checked:border-gray-500 checked:bg-[#c5baff] border-1 border-gray-400 rounded-full w-3 h-3 appearance-none cursor-pointer' onChange={() => setRole("Patient")} type="radio" name="role" id="Patient" />
                                <label className='cursor-pointer' htmlFor="Patient">Patient</label>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="fristname" placeholder="Frist Name" />
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastname" placeholder="Last Name" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" />
                                <div className="relative grid grid-cols-1">
                                    <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type={!showNum ? "password" : "text"} value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" />
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

export default Signin