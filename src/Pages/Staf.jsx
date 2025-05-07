import { lazy } from 'react';
const StaffForm = lazy(() => import ('../Components/Dashboard/StaffForm'));
const StaffTable = lazy(() => import ('../Components/Dashboard/StaffTable'));

const Staf = () => {
    return (
        <div className='bg-gray-100'>
            <div className="p-8! container mx-auto! pt-23! px-[5%]!">
                <StaffForm />
                <StaffTable />
            </div>
        </div>
    );
};

export default Staf;