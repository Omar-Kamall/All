const AppointmentsTable = () => {
    const appointments = [
        { id: 1, name: 'John David Earl Ramos', date: '16/01/2023', time: '12:54', status: 'Pending' },
        { id: 2, name: 'Denise Kratter', date: '04/12/2023', time: '02:21', status: 'Rejected' },
        { id: 3, name: 'Phillip Baker', date: '04/12/2023', time: '02:21', status: 'Pending' },
        { id: 4, name: 'Emerson Station', date: '16/01/2023', time: '12:54', status: 'Accept' },
        { id: 5, name: 'Arkado Shiri Madsen', date: '03/05/2019', time: '12:54', status: 'Rejected' },
    ];

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
                        {appointments.map((appointment) => (
                            <tr key={appointment.id} className="hover:bg-gray-50">
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{appointment.name}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{appointment.date}</td>
                                <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">{appointment.time}</td>
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
                                        {appointment.status}
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