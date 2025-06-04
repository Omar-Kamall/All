import { useEffect, useState } from "react";
import { Appointment_Get_Data } from "../../Api/Appointment";

const Dashboardstaftable = () => {
    const [data_Reservations , setData_Reservations] = useState([]);
    useEffect(() => {
        const fetch_Data = async () => {
            try{
                const data = await Appointment_Get_Data();
                setData_Reservations(data);
            }catch(error){
                console.log(error);
            }
        }
        fetch_Data();
    },[])


    return (
        <section>
            <div className="container mx-auto! px-[5%]! mt-10!">
                <div className="overflow-x-auto bg-white p-6! rounded">
                    <h2 className="text-xl font-bold text-gray-800 mb-6!">Reservations</h2>
                    <table width="100%">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="px-6! py-3! whitespace-nowrap text-sm text-gray-700">Name</th>
                                <th className="px-6! py-3! whitespace-nowrap text-sm text-gray-700">Date Of Birth</th>
                                <th className="px-6! py-3! whitespace-nowrap text-sm text-gray-700">Gender</th>
                                <th className="px-6! py-3! whitespace-nowrap text-sm text-gray-700">Email</th>
                                <th className="px-6! py-3! whitespace-nowrap text-sm text-gray-700">Phone</th>
                                <th className="px-6! py-3! whitespace-nowrap text-sm text-gray-700">Address</th>
                                <th className="px-6! py-3! whitespace-nowrap text-sm text-gray-700">Department</th>
                                <th className="px-6! py-3! whitespace-nowrap text-sm text-gray-700">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data_Reservations.map(item => (
                                <tr className="hover:bg-gray-50 border-t-1 border-gray-200" key={item.id}>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.firstname + " " + item.lastname}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.date_of_birth}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.gender}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.email}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.mobilnumber}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.adress}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.department_name.departmentName}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.appointment_date}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Dashboardstaftable