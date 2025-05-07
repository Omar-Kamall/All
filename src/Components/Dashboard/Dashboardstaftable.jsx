const data = [
    { id: 0, name: 'Sam', dname: "omar" , dob: '1954-06-13' , gender: "male" , email: "omar@gmail.com" , phone: "01006677452" , address: "Mans" , department: "tools" , date: '1954-06-13' },
    { id: 1, name: 'Sam', dname: "omar" , dob: '1954-06-13' , gender: "male" , email: "omar@gmail.com" , phone: "01006677452" , address: "Mans" , department: "tools" , date: '1954-06-13' },
    { id: 2, name: 'Sam', dname: "omar" , dob: '1954-06-13' , gender: "male" , email: "omar@gmail.com" , phone: "01006677452" , address: "Mans" , department: "tools" , date: '1954-06-13' },
    { id: 3, name: 'Sam', dname: "omar" , dob: '1954-06-13' , gender: "male" , email: "omar@gmail.com" , phone: "01006677452" , address: "Mans" , department: "tools" , date: '1954-06-13' },
    { id: 4, name: 'Sam', dname: "omar" , dob: '1954-06-13' , gender: "male" , email: "omar@gmail.com" , phone: "01006677452" , address: "Mans" , department: "tools" , date: '1954-06-13' },
];

const Dashboardstaftable = () => {
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
                            {data.map(item => (
                                <tr className="hover:bg-gray-50 border-t-1 border-gray-200" key={item.id}>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.name}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.dob}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.gender}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.email}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.phone}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.address}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.department}</th>
                                    <th className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{item.date}</th>
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