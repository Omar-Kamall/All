import { useEffect, useState } from "react";
import { Appointment_Get_Data } from "../../Api/Appointment";

const AppointmentsTable = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const Fetch_Data = async () => {
            try{
                const res = await Appointment_Get_Data();
                setData(res);
            }catch(error){
                console.log(error);
                throw error;
            }
        }
        Fetch_Data();
    },[])

    return (
        <div className="bg-white p-6! rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6!">Appointments</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Time</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((appointment) => (
                            <tr key={appointment.id} className="hover:bg-gray-50">
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{appointment.firstname + " " + appointment.lastname}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{appointment.appointment_date}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{appointment.doctor_name.firstname + " " + appointment.doctor_name.lastname}</td>
                                <td className="px-6! py-4! whitespace-nowrap">
                                    <span
                                        className={`px-3! py-1! inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            appointment.status === 'Accept'
                                                ? 'bg-green-100 text-green-800'
                                                : appointment.status === 'Rejected'
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                        }`}
                                    >
                                        {appointment.gender}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentsTable; 