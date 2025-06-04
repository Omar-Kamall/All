import { useState } from 'react';
import Swal from 'sweetalert2';
import { Appointment_Post_Data } from '../Api/Appointment';

const Appinetment = () => {
    const data = [
        { id: 0, name: "Grahah", depart: [
            { id: 0, name: "Omar Kamal" }, { id: 1, name: "Mohamed Ahmed" },
            { id: 2, name: "Amr Hosam" }, { id: 2, name: "Amr Hosam" }, { id: 3, name: "Kariem Moaaz" }
        ]},
        { id: 1, name: "Dentist", depart: [
            { id: 0, name: "Kariem Moaaz" }, { id: 1, name: "Ahmed Mohamed" },
            { id: 2, name: "Hosam Amr" }, { id: 3, name: "Amar Alsayed" }, { id: 4, name: "Kamal Omar" }
        ]},
        { id: 2, name: "Foot", depart: [
            { id: 0, name: "Omar Mohamed" }, { id: 1, name: "Mohamed Nader" },
            { id: 2, name: "Abdo Hosam" }, { id: 2, name: "Ahmed Hosam" }, { id: 3, name: "Moaaz Nar" }
        ]},
    ];
    // Submit
    const [fristname ,setFristname] = useState('');
    const [lastname ,setLastname] = useState('');
    const [email ,setEmail] = useState('');
    const [tel ,setTel] = useState('');
    const [nic ,setNic] = useState('');
    const [date ,setDate] = useState('');
    const [gender ,setGender] = useState('');
    const [appointment_date ,setAppointment_date] = useState('');
    const [department_name ,setDepartment_name] = useState('');
    const [doctor_name ,setDoctor_name] = useState('');
    const [address ,setAddress] = useState('');
    // On Submit
    const handle = async (event) => {
        event.preventDefault();
        const fname = fristname.trim();
        const lname = lastname.trim();
        const Email = email.trim();
        const Tel = tel.trim();
        const NIC = nic.trim();
        const Date = date.trim();
        const Gender = gender.trim();
        const Appointment_Date = appointment_date.trim();
        const Department_Name = department_name.trim();
        const Doctor_Name = doctor_name.trim();
        const Address = address.trim();
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
        else if(!Email || Email.length < 11 || Email.indexOf("@") == -1)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Compelte Email",
            });
        else if(!Tel || Tel.length < 11 || isNaN(Tel))
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Compelte Phone Number",
            });
        else if(!NIC || NIC.length < 14 || isNaN(NIC))
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Compelte Nic",
            });
        else if(!Date)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Date",
            });
        else if(!Gender)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Gender",
            });
        else if(!Appointment_Date)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Appointment Date",
            });
        else if(!Department_Name)
            Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Please Enter Department Name",
            });
        else if(!Doctor_Name)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Doctor Name",
            });
        else if(!Address)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Address",
            });
        else{
            try{
                const res = await Appointment_Post_Data({firstname: fname , lastname: lname , email: Email , mobilnumber: Tel ,
                    adress: Address , national_identity_card: NIC , date_of_birth: Date , gender: Gender ,
                    appointment_date: Appointment_Date , department_name: { id: Department_Name} , doctor_name: {id: Doctor_Name}
                })
                console.log(res);
                Swal.fire({
                    icon: "success",
                    title: "Rigster Sucssesfuly ....",
                });
                setFristname("");setLastname("");setEmail("");setTel("");
                setNic("");setDate("");setGender("");setAppointment_date("");
                setDepartment_name("");setDoctor_name("");setAddress("");
            }catch(error)
            {
                Swal.fire({
                    icon: "error",
                    title: error,
                });
            }
        }
    }
    return (
        <section>
            <form onSubmit={handle}>
                <div className="loading mx-12! lg:mx-50! pt-18! pb-20!">
                    <div className="container mx-auto!">
                        <h1 className="font-bold text-2xl flex justify-center mb-5!">Appointment</h1>
                        <div className="grid grid-cols-1 gap-1">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" value={fristname} onChange={(e) => setFristname(e.target.value)} name="fristname" placeholder="Frist Name" />
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} name="lastname" placeholder="Last Name" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" /> 
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="tel" value={tel} onChange={(e) => setTel(e.target.value)} name="tel" placeholder="Modile Number" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" value={nic} onChange={(e) => setNic(e.target.value)} name="nic" placeholder="NIC" />
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="date" value={date} onChange={(e) => setDate(e.target.value)} name="date" placeholder="Date Of Birth" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <select value={gender} onChange={(e) => setGender(e.target.value)} name="gender" className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500">
                                    <option value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Custom">Custom</option>
                                </select> 
                                <input value={appointment_date} onChange={(e) => setAppointment_date(e.target.value)} className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="date" name="appointment_date" placeholder="Appointment Date" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <select value={department_name} onChange={(e) => setDepartment_name(e.target.value)} name="department_name" className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500">
                                    <option value="">Department Name</option>
                                    {data.map(item => (
                                        <option key={item.id} value="1">{item.name}</option>
                                    ))}
                                </select>
                                <select value={doctor_name} onChange={(e) => setDoctor_name(e.target.value)} name="doctor_name" className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500">
                                    <option value="">Doctor Name</option>
                                    <option value="1">Omar Kamal</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-1">
                                <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="h-30 p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" name="address" placeholder="Address Or Location"></textarea>
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

export default Appinetment