import { lazy } from "react"
const Aboutus = lazy(() => import ('../Component/Aboutus'));

const About = () => {
    return (
        <div>
            <Aboutus />
        </div>
    )
}

export default About