import './App.css'
import {  Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import Home from "./pages/Home/Home"
import Services from './components/services/services';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SignUp from './components/Signup';
import PetTicket from './components/petticket/petticket';
import Petfriendlycafs from './components/pet driendly cafs/petfriendlycafs';
import MedicalServices from './components/medicalservice/medicalservice';
import BookAppointment from './components/medicalservice/bookappointment';

function App() {

  return (
    <div className='app'>
      <Navbar/>
      {/* <Slider/> */}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={< Services/>} /> 
        <Route path="/login" element={< SignUp/>} />
        <Route path="/petticket" element={< PetTicket/>} />
        <Route path="/Petfriendlycafs" element={< Petfriendlycafs/>} />
        <Route path="/medicalservice" element={< MedicalServices/>} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>
     <Footer/>
    </div>
  )
}

export default App
