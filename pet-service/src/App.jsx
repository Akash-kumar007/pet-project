import './App.css'
import {  Routes, Route, Link } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import Home from "./pages/Home/Home"
import Services from './components/services/services';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {

  return (
    <div className='app'>
      <Navbar/>
      {/* <Slider/> */}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={< Services/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
     <Footer/>
    </div>
  )
}

export default App
