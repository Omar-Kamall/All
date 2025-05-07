import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mar 1', value: 23 },
    { name: 'Mar 2', value: 25 },
    { name: 'Mar 3', value: 50 },
    { name: 'Mar 4', value: 21 },
    { name: 'Mar 5', value: 22 },
    { name: 'Mar 6', value: 23 },
    { name: 'Mar 7', value: 24 },
    { name: 'Mar 8', value: 25 },
    { name: 'Mar 9', value: 26 },
    { name: 'Mar 10', value: 27 },
    { name: 'Mar 11', value: 28 },
    { name: 'Mar 12', value: 29 },
    { name: 'Mar 13', value: 30 },
    { name: 'Mar 14', value: 24 },
    { name: 'Mar 15', value: 18 },
    { name: 'Mar 16', value: 25 },
    { name: 'Mar 17', value: 27 },
    { name: 'Mar 18', value: 23 },
    { name: 'Mar 19', value: 25 },
    { name: 'Mar 20', value: 20 },
    { name: 'Mar 21', value: 21 },
    { name: 'Mar 22', value: 22 },
    { name: 'Mar 23', value: 23 },
    { name: 'Mar 24', value: 24 },
    { name: 'Mar 25', value: 25 },
    { name: 'Mar 26', value: 26 },
    { name: 'Mar 27', value: 27 },
    { name: 'Mar 28', value: 28 },
    { name: 'Mar 29', value: 29 },
    { name: 'Mar 30', value: 30 },
];

const PatientChart = () => {
    const [activeTab, setActiveTab] = useState('7days');

    const filteredData = useMemo(() => {
        if (activeTab === '7days') {
            return data.slice(-7);
        } else {
            return data.slice(-30);
        }
    }, [activeTab]);

    return (
        <div className="bg-white p-6! rounded-xl shadow-sm mb-8!">
            <div className="flex items-center justify-between mb-6!">
                <h2 className="text-xl font-bold text-gray-800">Patients</h2>
                <div className="flex gap-3">
                    <button
                        onClick={() => setActiveTab('7days')}
                        className={`px-4! py-2! rounded-lg text-sm font-medium transition-colors cursor-pointer duration-200 ${
                            activeTab === '7days'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        7 days
                    </button>
                    <button
                        onClick={() => setActiveTab('30days')}
                        className={`px-4! py-2! rounded-lg text-sm font-medium transition-colors cursor-pointer duration-200 ${
                            activeTab === '30days'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        30 days
                    </button>
                </div>
            </div>
            <div className="h-[300px] overflow-x-auto">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={filteredData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="name" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={{ fill: '#3b82f6', strokeWidth: 1 }}
                            activeDot={{ r: 6, fill: '#3b82f6' }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PatientChart; 