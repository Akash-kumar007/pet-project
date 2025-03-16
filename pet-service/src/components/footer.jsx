import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 mt-auto ">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>About Us</h5>
            <p>
              Stay updated with the latest trends in gaming, movies, and crypto.
              Join us for exciting content and insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="col-lg-4 col-md-12 mb-4 text-center">
            <h5>Follow Us</h5>
            <a href="#" className="btn btn-outline-light btn-sm m-1"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="btn btn-outline-light btn-sm m-1"><i className="fab fa-twitter"></i></a>
            <a href="#" className="btn btn-outline-light btn-sm m-1"><i className="fab fa-instagram"></i></a>
            <a href="#" className="btn btn-outline-light btn-sm m-1"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center py-2 bg-secondary ">
        © 2025 All Rights Reserved | TAILMATE
      </div>
    </footer>
  );
};

export default Footer;
