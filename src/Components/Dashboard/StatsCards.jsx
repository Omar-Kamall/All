import { UserGroupIcon, UserIcon, HomeIcon, BeakerIcon } from '@heroicons/react/24/outline';
// import { Staff_Get_Data } from '../../Api/Staff';
import { Appointment_Get_Data } from '../../Api/Appointment';
import { useEffect, useState } from 'react';

const StatsCards = () => {
    const [Patient ,setPatient] = useState(0);
    const [Doctors ,setDoctors] = useState(0);
    const [Wards ,setWards] = useState(0);
    const [Labs ,setLabs] = useState(0);

    useEffect(() => {
        const Fetch_Data = async () => {
            try{
                const [patient , doctor , wards , labs] = await Promise.all([
                    Appointment_Get_Data(),
                    Appointment_Get_Data(),
                    Appointment_Get_Data(),
                    Appointment_Get_Data(),
                ]);
                setPatient(patient.length);
                setDoctors(doctor.length);
                setWards(wards.length);
                setLabs(labs.length);
            }catch(error){
                console.log(error);
            }
        }
        Fetch_Data();
    },[])
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8!">
            <div className="bg-white p-6! rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm font-medium mb-1!">Total Patient</p>
                    <p className="text-2xl font-bold text-gray-800">{Patient}</p>
                </div>
                <UserGroupIcon className="h-12 w-12 text-blue-500 opacity-80" />
            </div>
            <div className="bg-white p-6! rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm font-medium mb-1!">Total Doctors</p>
                    <p className="text-2xl font-bold text-gray-800">{Doctors}</p>
                </div>
                <UserIcon className="h-12 w-12 text-green-500 opacity-80" />
            </div>
            <div className="bg-white p-6! rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm font-medium mb-1!">Total Wards</p>
                    <p className="text-2xl font-bold text-gray-800">{Wards}</p>
                </div>
                <HomeIcon className="h-12 w-12 text-purple-500 opacity-80" />
            </div>
            <div className="bg-white p-6! rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm font-medium mb-1!">Total Labs</p>
                    <p className="text-2xl font-bold text-gray-800">{Labs}</p>
                </div>
                <BeakerIcon className="h-12 w-12 text-red-500 opacity-80" />
            </div>
        </div>
    );
};

export default StatsCards; 