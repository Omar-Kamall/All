import { lazy } from 'react';
const PharmacyForm = lazy(() => import ('../Components/Dashboard/PharmacyForm'));
const PharmacyTable = lazy(() => import ('../Components/Dashboard/PharmacyTable'));

const Pharmacy = () => {
    return (
        <div className='bg-gray-100'>
            <div className="p-8! container mx-auto! pt-23! px-[5%]!">
                <PharmacyForm />
                <PharmacyTable />
            </div>
        </div>
    );
};

export default Pharmacy; 