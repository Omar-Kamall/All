import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contactus = () => {
        const form = useRef();
        const sendEmail = (e) => {
        e.preventDefault();
        const fname = e.target.fristname.value.trim();
        const lname = e.target.lastname.value.trim();
        const tel = e.target.tel.value.trim();
        const email = e.target.email.value.trim();
        const message = e.target.message.value.trim();
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
        else if(!tel || isNaN(tel) || tel.length < 11)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Complete Phone Number",
            });
        else if(!email || email.indexOf("@") == -1 || email.length < 11)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Complete Your Email",
            });
        else if(!message)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Your Message",
            });
        else{
            emailjs
            .sendForm('service_ixupu0v', 'template_lsdsuka', form.current, {
                publicKey: 'l8dEU2NwVfwGDRdQH',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Sent Your Message",
                        icon: "success",
                        draggable: true
                    });
                    e.target.reset();
                },
                (error) => {
                    console.log('Failed Send ...', error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Faild Send Your Message",
                    });
                },
            )
        }
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="loading mx-12! lg:mx-50! pt-18! pb-10!">
                <div className="container mx-auto!">
                    <h1 className="font-bold text-2xl flex justify-center mb-5!">Send Us A Message</h1>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" name="fristname" placeholder="Frist Name" />
                            <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" name="lastname" placeholder="Last Name" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="tel" name="tel" placeholder="Modile Number" />
                            <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="grid grid-cols-1">
                            <textarea className="h-35 p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" name="message" placeholder="Enter Your A Message"></textarea>
                        </div>
                        <div className="flex justify-center mt-4!">
                            <input className="px-30! py-2! cursor-pointer text-white bg-[#c5baff] hover:scale-105 hover:bg-[#B7B7B7] shadow-black shadow-2xl rounded-2xl transition duration-600" type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Contactus