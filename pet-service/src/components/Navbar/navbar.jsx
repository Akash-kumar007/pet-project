import "./Navbar.css"; // Import the CSS file
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="https://png.pngtree.com/png-vector/20230427/ourmid/pngtree-bone-dog-pet-logo-vector-png-image_6718231.png" alt="Frizty Logo" className="logo" />
        <div className="brand">
          <span className="brand-name">TAIL</span>
          <span className="brand-subtext">MATE</span>
        </div>
      </div>

      <ul className="nav-links">
      <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/petticket">Pet Ticketing</Link>
        <Link className="nav-item" to="/petfriendlycafs">Pet Friendly Cafes</Link>
        <Link className="nav-item relative" to="medicalservice">Medical Services</Link>
        <Link className="nav-item" to="/services">Services</Link>

       
      </ul>

    
    
      <Link className="buy-login"to="/login"  >
      <i className="bi bi-person-circle"></i> 
       SIGNUP
      </Link>

     
    </nav>
  );
}
