import { UserGroupIcon, UserIcon, HomeIcon, BeakerIcon } from '@heroicons/react/24/outline';

const StatsCards = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8!">
            <div className="bg-white p-6! rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm font-medium mb-1!">Total Patient</p>
                    <p className="text-2xl font-bold text-gray-800">28</p>
                </div>
                <UserGroupIcon className="h-12 w-12 text-blue-500 opacity-80" />
            </div>
            <div className="bg-white p-6! rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm font-medium mb-1!">Total Doctors</p>
                    <p className="text-2xl font-bold text-gray-800">20</p>
                </div>
                <UserIcon className="h-12 w-12 text-green-500 opacity-80" />
            </div>
            <div className="bg-white p-6! rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm font-medium mb-1!">Total Wards</p>
                    <p className="text-2xl font-bold text-gray-800">20</p>
                </div>
                <HomeIcon className="h-12 w-12 text-purple-500 opacity-80" />
            </div>
            <div className="bg-white p-6! rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm font-medium mb-1!">Total Labs</p>
                    <p className="text-2xl font-bold text-gray-800">20</p>
                </div>
                <BeakerIcon className="h-12 w-12 text-red-500 opacity-80" />
            </div>
        </div>
    );
};

export default StatsCards; 