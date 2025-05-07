import { lazy } from 'react';
const Aboutus = lazy(() => import ('../Component/Aboutus'));
const Serveices = lazy(() => import ('../Component/Serveices'));
const OurDoc = lazy(() => import ('../Component/OurDoc'));
const Contactus = lazy(() => import ('../Component/Contactus'));

const Home = () => {
    return (
        <div>
            <Aboutus/>
            <Serveices/>
            <OurDoc/>
            <Contactus/>
        </div>
    )
}

export default Home