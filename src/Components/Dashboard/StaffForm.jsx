import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const StaffForm = () => {
    // Data Input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [nic, setNic] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // Show And Hide Password
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:');
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-6! mb-8!">
            <div className="flex justify-between items-center mb-6!">
                <h1 className="text-[20px] md:text-2xl font-bold text-gray-800">Staff Management</h1>
                <div className="flex gap-4">
                    <button className="bg-purple-500 hidden md:flex text-white px-4! py-3! rounded-lg hover:bg-purple-600 transition-colors">
                        Generate Report
                    </button>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="ID"
                            className="w-20 lg:w-50 ring-3 ring-gray-400 focus:border-0 focus:ring-[#c5baff] outline-none rounded-l-lg px-4! py-2! cursor-pointer"
                        />
                        <button className="bg-yellow-400 text-white px-4! py-3! rounded-r-lg hover:bg-yellow-500 transition-colors cursor-pointer">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    />
                    <select
                        name="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    >
                        <option value="">Role</option>
                        <option value="doctor">Doctor</option>
                        <option value="nurse">Nurse</option>
                        <option value="staff">Staff</option>
                    </select>
                    <select
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    >
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    />
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    />
                    <div className="md:col-span-2">
                        <textarea
                            name="address"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                            rows="3"
                        />
                    </div>
                    <input
                        type="text"
                        name="nic"
                        placeholder="NIC"
                        value={nic}
                        onChange={(e) => setNic(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    />
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2!"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                            {showPassword ? (
                                <EyeSlashIcon className="h-5 w-5 text-gray-400 cursor-pointer" />
                            ) : (
                                <EyeIcon className="h-5 w-5 text-gray-400 cursor-pointer" />
                            )}
                        </button>
                    </div>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2!"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                            {showConfirmPassword ? (
                                <EyeSlashIcon className="h-5 w-5 text-gray-400 cursor-pointer" />
                            ) : (
                                <EyeIcon className="h-5 w-5 text-gray-400 cursor-pointer" />
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex gap-4 justify-center mt-10!">
                    <button className="bg-green-500 text-white px-6! py-2! rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
                        Register
                    </button>
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-6! py-2! rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        className="bg-red-500 text-white px-6! py-2! rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StaffForm; 