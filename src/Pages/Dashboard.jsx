import { lazy } from 'react';
const StatsCards = lazy(() => import ('../Components/Dashboard/StatsCards'));
const PatientChart = lazy(() => import ('../Components/Dashboard/PatientChart'));
const AppointmentsTable = lazy(() => import ('../Components/Dashboard/AppointmentsTable'));
const DoctorsTable = lazy(() => import ('../Components/Dashboard/DoctorsTable'));

const Dashboard = () => {
    return (
        <div className='bg-gray-100'>
            <div className="p-8! container mx-auto! min-h-screen pt-23! px-[5%]!">
                <StatsCards />
                <PatientChart />
                <div className="space-y-8">
                    <AppointmentsTable />
                    <DoctorsTable />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;