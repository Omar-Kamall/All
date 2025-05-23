import { createBrowserRouter , createRoutesFromElements , Route , Outlet , RouterProvider } from 'react-router-dom';
import { useState , useEffect, lazy } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
const Navbar = lazy(() => import ('./Component/Navbar'));
const Home = lazy(() => import ('./Pages/Home'));
const Head = lazy(() => import ('./Component/Head'));
const About = lazy(() => import ('./Pages/About'));
const Appinetment = lazy(() => import ('./Pages/Appinetment'));
const Signin = lazy(() => import ('./Pages/Signin'));
const Signup = lazy(() => import ('./Pages/Signup'));
const Contactus = lazy(() => import ('./Component/Contactus'));
const Serveices = lazy(() => import ('./Component/Serveices'));
const Footer = lazy(() => import ('./Component/Footer'));
const Dashboard = lazy(() => import ('./Pages/Dashboard'));
const Nav = lazy(() => import ('./Component/Nav'));
const Staf = lazy(() => import ('./Pages/Staf'));
const Appointment = lazy(() => import ('./Pages/Appointment'));
const Pharmacy = lazy(() => import ('./Pages/Pharmacy'));
const Dashboard_Staf = lazy(() => import ('./Pages/Dashboard_Staf'));
const Dashboard_Paitent = lazy(() => import ('./Pages/Dashboard_Paitent'));
import './Pages/App.css';

const Layout = () => {
  return(
    <>
      <Navbar />
      <Head />
      <Outlet />
      <Footer />
    </>
  )
}

const Layout_NoHead = () => {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const Nav_Dashboard = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

const App = () => {
  // Routes Pages
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/appinetment' element={<Appinetment />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
      </Route>
      <Route element={<Layout_NoHead />}>
        <Route path='/serveices' element={<Serveices />}/>
        <Route path='/contactus' element={<Contactus />}/>
      </Route>
      <Route path='/dashboard' element={<Nav_Dashboard />}>
        <Route index element={<Dashboard />}/>
        <Route path='staf' element={<Staf />}/>
        <Route path='appointment' element={<Appointment />}/>
        <Route path='pharmacy' element={<Pharmacy />}/>
      </Route>
      <Route path='/dashboardstaf' element={<Nav_Dashboard />}>
        <Route index element={<Dashboard_Staf />}/>
      </Route>
      <Route path='/dashboardpaitent' element={<Nav_Dashboard />}>
        <Route index element={<Dashboard_Paitent />}/>
      </Route>
    </Route>
  ))
  // Loading Page
  const [loading , setLoading] = useState(false);
  useEffect(() => {
    const timer = setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3000)
    return clearTimeout(timer);
  },[])

  return (
    <>
      {loading ? <div className='bg-black h-[100vh] flex justify-center items-center'>
        <PulseLoader color='#C5DCFF' size={55}/>
      </div> : <RouterProvider router={router} />}
    </>
  )
}

export default App