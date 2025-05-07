import { lazy } from "react";
const Dashboardpatientable = lazy(() => import ("../Components/Dashboard/Dashboardpatientable"));
const DashboardpatientChart = lazy(() => import ("../Components/Dashboard/DashboardpatientChart"));

const Dashboard_Paitent = () => {
    return (
        <div className="bg-gray-100 pt-23! pb-10!">
            <DashboardpatientChart/>
            <Dashboardpatientable/>
        </div>
    )
}

export default Dashboard_Paitent