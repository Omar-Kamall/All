const StaffTable = () => {
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
                        <tr className="hover:bg-gray-50">
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">1</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">John Doe</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Doctor</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Male</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">john@example.com</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">123-456-7890</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">123456789</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">1990-01-01</td>
                            <td className="px-6! py-4! whitespace-nowrap">
                                <span className="px-3! py-1! inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Active
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

export default StaffTable; 