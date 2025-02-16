import Swal from 'sweetalert2';

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
    const handle = (event) => {
        event.preventDefault();
        const fname = event.target.fristname.value.trim();
        const lname = event.target.lastname.value.trim();
        const Email = event.target.email.value.trim();
        const tel = event.target.tel.value.trim();
        const NIC = event.target.nic.value.trim();
        const Date = event.target.date.value.trim();
        const Gender = event.target.gender.value.trim();
        const Appointment_Date = event.target.appointment_date.value.trim();
        const Department_Name = event.target.department_name.value.trim();
        const Doctor_Name = event.target.doctor_name.value.trim();
        const Address = event.target.address.value.trim();
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
        else if(!tel || tel.length < 11 || isNaN(tel))
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
                        <h1 className="font-bold text-2xl flex justify-center mb-5!">Appointment</h1>
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
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="text" name="nic" placeholder="NIC" />
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="date" name="date" placeholder="Date Of Birth" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <select name="gender" className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500">
                                    <option value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Custom">Custom</option>
                                </select> 
                                <input className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" type="date" name="appointment_date" placeholder="Appointment Date" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <select name="department_name" className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500">
                                    <option value="">Department Name</option>
                                    {data.map(item => (
                                        <option key={item.id} value={item.name}>{item.name}</option>
                                    ))}
                                </select> 
                                <select name="doctor_name" className="p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500">
                                    <option value="">Doctor Name</option>
                                    <option value="omar">Omar Kamal</option>
                                </select> 
                            </div>
                            <div className="grid grid-cols-1">
                                <textarea className="h-30 p-2! m-2! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded transition duration-500" name="address" placeholder="Address Or Location"></textarea>
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