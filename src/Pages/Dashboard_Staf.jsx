import { lazy } from "react";
const DashboardstafChart = lazy(() => import  ("../Components/Dashboard/DashboardstafChart"));
const Dashboardstaftable = lazy(() => import  ("../Components/Dashboard/Dashboardstaftable"));

const Dashboard_Staf = () => {
    return (
        <div className="bg-gray-100 pt-23! pb-10!">
            <DashboardstafChart/>
            <Dashboardstaftable/>
        </div>
    )
}

export default Dashboard_Staf