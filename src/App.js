import Error from './pages/Error';
import Home from './pages/Home';
// import ComingSoon from './pages/ComingSoon';
import About from './pages/About';
import BusinessCase from './pages/BusinessCase';
import Paper from './pages/Paper'
import Petrosmart from './pages/Petrosmart'
import './assets/css/style.css'

import {
  Routes,
  Route
} from 'react-router-dom'
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import OilRigDesign from './pages/OilRigDesign';

function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <Routes>
      <Route path='*' element={<Error/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='competitions/business_case' element={<BusinessCase/>}/>
      <Route path='competitions/paper' element={<Paper/>}/>
      <Route path='competitions/petrosmart' element={<Petrosmart/>}/>
      <Route path='competitions/oil_rig_design' element={<OilRigDesign/>} />
    </Routes>
  );
}

export default App;
