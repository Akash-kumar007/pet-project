import "./Navbar.css"; // Import the CSS file
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlldm7AVyElQFK8bnR6m40nmWBf2-tnd1BzQ&s" alt="Frizty Logo" className="logo" />
        <div className="brand">
          <span className="brand-name">TAIL</span>
          <span className="brand-subtext">MATE</span>
        </div>
      </div>

      <ul className="nav-links">
      <Link className="nav-item" to="/">Home</Link>
        <li className="nav-item">Pet Ticketing</li>
        <li className="nav-item">Pet Friendly Cafes</li>
        <li className="nav-item relative">Medical Services</li>
        <Link className="nav-item" to="/services">Services</Link>

       
      </ul>

    
    
      <button className="buy-login">
      <i className="bi bi-person-circle"></i> 
        LOGIN
      </button>

      <button className="buy-btn">
      <i className="bi bi-cart-fill"></i>
        CART
      </button>
    </nav>
  );
}
