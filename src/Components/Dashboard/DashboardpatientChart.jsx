import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

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


const DashboardpatientChart = () => {
    return (
        <section>
            <div className="container mx-auto! px-[5%]!">
                <div className="bg-white p-6! h-[300px] rounded overflow-x-auto">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
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
        </section>
    )
}

export default DashboardpatientChart