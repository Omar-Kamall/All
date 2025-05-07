import { useState } from 'react';

const AppointmentForm = () => {
    // Form state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [nic, setNic] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [department, setDepartment] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [address, setAddress] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-6! mb-8!">
            <div className="flex justify-between items-center mb-6!">
                <h1 className="md:text-2xl text-[20px] font-bold text-gray-800">Appointment Management</h1>
                <div className="flex gap-4">
                    <button className="bg-purple-500 hidden md:flex text-white px-4! py-3! rounded-lg hover:bg-purple-600 transition-colors">
                        Generate Report
                    </button>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="ID"
                            className="w-20 md:w-50 ring-3 ring-gray-400 focus:border-0 focus:ring-[#c5baff] outline-none rounded-l-lg px-4! py-2!"
                        />
                        <button className="bg-yellow-400 text-white px-4! py-3! rounded-r-lg hover:bg-yellow-500 transition-colors cursor-pointer">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className='grid grid-cols-1'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                        />
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                        />
                        <input
                            type="text"
                            placeholder="NIC"
                            value={nic}
                            onChange={(e) => setNic(e.target.value)}
                            className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                        />
                        <input
                            type="date"
                            placeholder="Date of Birth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                        />
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                        >
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input
                            type="date"
                            placeholder="Appointment Date"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5!">
                        <input
                            type="time"
                            placeholder="Appointment Time"
                            value={appointmentTime}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                            className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                        />
                        <select
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                        >
                            <option value="">Department Name</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="neurology">Neurology</option>
                            <option value="orthopedics">Orthopedics</option>
                        </select>
                        <select
                            value={doctorName}
                            onChange={(e) => setDoctorName(e.target.value)}
                            className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                        >
                            <option value="">Doctor Name</option>
                            <option value="dr-smith">Dr. Smith</option>
                            <option value="dr-jones">Dr. Jones</option>
                            <option value="dr-williams">Dr. Williams</option>
                        </select>
                    </div>
                </div>
                <textarea
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows="3"
                    className="w-full mt-5! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                />
                <div className="flex gap-4 justify-center mt-10!">
                    <button type="submit" className="bg-green-500 text-white px-6! py-2! rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
                        Register
                    </button>
                    <button type="button" className="bg-blue-500 text-white px-6! py-2! rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                        Update
                    </button>
                    <button type="button" className="bg-red-500 text-white px-6! py-2! rounded-lg hover:bg-red-600 transition-colors cursor-pointer">
                        Delete
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm; 