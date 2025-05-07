const AppointmentTable = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6!">
            <h2 className="text-xl font-bold text-gray-800 mb-6!">Recent Appointments</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Department</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Doctor</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Time</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Mobile</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">1</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Mohamed Ahmed</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Cardiology</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Dr. Smith</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">2024-03-15</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">10:30 AM</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">078 4662516</td>
                            <td className="px-6! py-4! whitespace-nowrap">
                                <span className="px-3! py-1! inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Confirmed
                                </span>
                            </td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-red-600 cursor-pointer">
                                ⨉
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">2</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Sara Mohamed</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Neurology</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Dr. Jones</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">2024-03-16</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">11:00 AM</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">078 1234567</td>
                            <td className="px-6! py-4! whitespace-nowrap">
                                <span className="px-3! py-1! inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                    Pending
                                </span>
                            </td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-red-600 cursor-pointer">
                                ⨉
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">3</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Ali Hassan</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Orthopedics</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Dr. Williams</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">2024-03-17</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">09:15 AM</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">078 9876543</td>
                            <td className="px-6! py-4! whitespace-nowrap">
                                <span className="px-3! py-1! inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Confirmed
                                </span>
                            </td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-red-600 cursor-pointer">
                                ⨉
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentTable; 