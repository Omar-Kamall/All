const DoctorsTable = () => {
    const doctors = [
        { id: 1, name: 'Sam', mobile: '0745555521', address: 'Kolkata', charge: 2000, education: 'MBBS', dob: '1954-06-13', status: 'Online' },
        { id: 2, name: 'Jack', mobile: '0747472835', address: 'Kandy', charge: 2000, education: 'Phd', dob: '1976-09-13', status: 'Offline' },
        { id: 3, name: 'David', mobile: '0745555487', address: 'Galle', charge: 2000, education: 'MBBS', dob: '1965-06-15', status: 'Offline' },
        { id: 4, name: 'Christine', mobile: '0747674769', address: 'Matara', charge: 2000, education: 'MBBS', dob: '1966-06-13', status: 'Offline' },
    ];

    return (
        <div className="bg-white p-6! mt-10! rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6!">Recent Doctors</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Mobile</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Address</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Charge</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Education</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {doctors.map((doctor) => (
                            <tr key={doctor.id} className="hover:bg-gray-50">
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{doctor.name}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{doctor.mobile}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{doctor.address}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{doctor.charge}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{doctor.education}</td>
                                <td className="px-6! py-4! whitespace-nowrap">
                                    <span
                                        className={`px-3! py-1! inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            doctor.status === 'Online'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {doctor.status}
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