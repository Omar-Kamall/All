import { createBrowserRouter , createRoutesFromElements , Route , Outlet , RouterProvider } from 'react-router-dom';
import { useState , useEffect } from 'react'
import PulseLoader from 'react-spinners/PulseLoader';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Head from './Component/Head';
import About from './Pages/About';
import Appinetment from './Pages/Appinetment';
import Singnin from './Pages/Singnin';
import Signup from './Pages/Signup';
import Contactus from './Component/Contactus';
import Serveices from './Component/Serveices';
import Footer from './Component/Footer';
import './Pages/App.css'

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
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/appinetment' element={<Appinetment />}/>
        <Route path='/signin' element={<Singnin />}/>
        <Route path='/signup' element={<Signup />}/>
      </Route>
      <Route element={<Layout_NoHead />}>
        <Route path='/serveices' element={<Serveices />}/>
        <Route path='/contactus' element={<Contactus />}/>
      </Route>
    </Route>
  ))
  const [loading , setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3000)
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