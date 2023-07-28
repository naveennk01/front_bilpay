import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Bills from "./pages/Bills";
//componentes
import LoginSignup from "./components/Resgistration/LoginSignup";
import Billpay from "./pages/Billpay";
import AddPayment from "./components/Payment/AddPayment"
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginSignup />} />

          <Route path='/Bill' element={<Billpay/>} />
          <Route path='/about' element={<About />} />
          <Route path='/bills' element={<Bills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Payment' element={<AddPayment />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;