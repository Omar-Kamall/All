// import { Staff_Get_Data } from "../../Api/Staff";
// import { useEffect, useState } from "react";

const StaffTable = () => {
    // const [data , setData] = useState([]);
    // useEffect(() => {
    //     const Fetch_Data = async () => {
    //         try{
    //             const res = await Staff_Get_Data();
    //             setData(res);
    //         }catch(error){
    //             console.error(error);
    //             throw error;
    //         }
    //     }
    //     Fetch_Data();
    // },[])

    const data = [
        {
            id: 1 , firstname: "Omar" , lastname: "Kamal" , role: "Staff" , gender: "male", email: "Omar@gmail.com" , mobilnumber: "01006677452" ,
            national_identity_card: "30509091504099" , date_of_birth: "2005 / 09 / 09",
        },
        {
            id: 2 , firstname: "Omar" , lastname: "Kamal" , role: "Staff" , gender: "male", email: "Omar@gmail.com" , mobilnumber: "01006677452" ,
            national_identity_card: "30509091504099" , date_of_birth: "2005 / 09 / 09",
        },
        {
            id: 3 , firstname: "Omar" , lastname: "Kamal" , role: "Staff" , gender: "male", email: "Omar@gmail.com" , mobilnumber: "01006677452" ,
            national_identity_card: "30509091504099" , date_of_birth: "2005 / 09 / 09",
        },
        {
            id: 4 , firstname: "Omar" , lastname: "Kamal" , role: "Staff" , gender: "male", email: "Omar@gmail.com" , mobilnumber: "01006677452" ,
            national_identity_card: "30509091504099" , date_of_birth: "2005 / 09 / 09",
        },
    ];
    
    return (
        <div className="bg-white rounded-xl shadow-sm p-6!">
            <h2 className="text-xl font-bold text-gray-800 mb-6!">Recent Staff</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Role</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Gender</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Mobile</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">NIC</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">DOB</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map(item => (
                            <tr className="hover:bg-gray-50" key={item.id}>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.id}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.firstname + " " + item.lastname}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.role}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.gender}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.email}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.mobilnumber}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.national_identity_card}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.date_of_birth}</td>
                                <td className="px-6! py-4! whitespace-nowrap">
                                    <span className="px-3! py-1! inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-red-600 cursor-pointer">
                                    ⨉
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StaffTable; 