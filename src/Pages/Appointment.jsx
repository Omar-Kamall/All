import { lazy } from 'react';
const AppointmentForm = lazy(() => import ('../Components/Dashboard/AppointmentForm'));
const AppointmentTable = lazy(() => import ('../Components/Dashboard/AppointmentTable'));

const Appointment = () => {
    return (
        <div className='bg-gray-100'>
            <div className="p-8! container mx-auto! pt-23! px-[5%]!">
                <AppointmentForm />
                <AppointmentTable />
            </div>
        </div>
    );
};

export default Appointment;