// import { useEffect, useState } from "react";
// import { Staff_Get_Data } from "../../Api/Staff";

const DoctorsTable = () => {
    // const [data , setData] = useState([]);
    // useEffect(() => {
    //     const Fetch_Data = async () => {
    //         try{
    //             const res = await Staff_Get_Data();
    //             setData(res);
    //         }catch(error){
    //             console.log(error);
    //             throw error;
    //         }
    //     }
    //     Fetch_Data();
    // },[])
    // console.log(data);

    const data = [
        { id: 1, firstname: 'Sam', lastname: 'Sam' , mobilnumber: '0745555521', adress: 'Kolkata', charge: 2000, email: 'MBBS' , gender: 'Male' , status: 'Online' },
        { id: 2, firstname: 'Jack', lastname: 'Sam' , mobilnumber: '0747472835', adress: 'Kandy', charge: 2000, email: 'Phd' , gender: 'Female' , status: 'Offline' },
        { id: 3, firstname: 'David', lastname: 'Sam' , mobilnumber: '0745555487', adress: 'Galle', charge: 2000, email: 'MBBS' , gender: 'Custom' , status: 'Offline' },
        { id: 4, firstname: 'Christine', lastname: 'Sam' , mobilnumber: '0747674769', adress: 'Matara', charge: 2000, email: 'MBBS' , gender: 'Custom' , status: 'Offline' },
    ];

    return (
        <div className="bg-white p-6! mt-10! rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6!">Recent Doctors</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Id</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Mobile</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Address</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((doctor) => (
                            <tr key={doctor.id} className="hover:bg-gray-50">
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{doctor.id}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{doctor.firstname + " " + doctor.lastname}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{doctor.email}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{doctor.mobilnumber}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{doctor.adress}</td>
                                <td className="px-6! py-4! whitespace-nowrap">
                                    <span
                                        className={`px-3! py-1! inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            doctor.status === 'Online'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {doctor.gender}
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

export default DoctorsTable; 