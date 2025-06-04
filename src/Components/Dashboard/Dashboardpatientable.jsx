import { useEffect , useState } from "react";
import { Appointment_Get_Data } from "../../Api/Appointment";

// const Reservations = [
//     { id: 0, name: 'Sam', dname: "omar" , department: "tools" , date: '1954-06-13' },
//     { id: 1, name: 'Sam', dname: "omar" , department: "tools" , date: '1954-06-13' },
//     { id: 2, name: 'Sam', dname: "omar" , department: "tools" , date: '1954-06-13' },
//     { id: 3, name: 'Sam', dname: "omar" , department: "tools" , date: '1954-06-13' },
//     { id: 4, name: 'Sam', dname: "omar" , department: "tools" , date: '1954-06-13' },
// ];

const Dashboardpatientable = () => {
    const [data_Reservations , setData_Reservations] = useState([]);
    useEffect(() => {
        const fetch_Data = async () => {
            try{
                const data = await Appointment_Get_Data();
                setData_Reservations(data);
            }catch(erroe){
                console.log(erroe);
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
                            <th className="px-6! py-3! whitespace-nowrap text-sm text-gray-700">Doctor</th>
                            <th className="px-6! py-3! whitespace-nowrap text-sm text-gray-700">Department</th>
                            <th className="px-6! py-3! whitespace-nowrap text-sm text-gray-700">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data_Reservations.map(item => (
                            <tr className="hover:bg-gray-50 border-t-1 border-gray-200" key={item.id}>
                                <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.firstname + " " + item.lastname}</th>
                                <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.doctor_name.firstname + " " + item.doctor_name.lastname}</th>
                                <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.department_name.departmentName}</th>
                                <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.date_of_birth}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    )
}

export default Dashboardpatientable