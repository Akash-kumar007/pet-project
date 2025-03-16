import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const cafes = [
  {
    name: "Paws & Beans Café",
    location: "New York, NY",
    image: "https://source.unsplash.com/400x300/?pet,cafe",
    features: ["Pet Menu", "Outdoor Seating", "Free Treats"],
    rating: "4.8",
    mapLink: "https://goo.gl/maps/xyz123",
  },
  {
    name: "The Doggy Diner",
    location: "Los Angeles, CA",
    image: "https://source.unsplash.com/400x300/?dog,cafe",
    features: ["Water Bowls", "Indoor & Outdoor Seating"],
    rating: "4.6",
    mapLink: "https://goo.gl/maps/xyz456",
  },
];

const PetCafes = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="jumbotron text-white text-center p-5" style={{ backgroundImage: "url('https://source.unsplash.com/1600x600/?pet,cafe')", backgroundSize: "cover" }}>
        <h1 className="display-4">Enjoy Coffee with Your Furry Friend!</h1>
        <p className="lead">Discover pet-friendly cafés where you and your pets are welcome.</p>
      </div>

      {/* Search & Filters */}
      <div className="my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for cafés..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      {/* Café Listings */}
      <div className="row">
        {cafes
          .filter((cafe) => cafe.name.toLowerCase().includes(search))
          .map((cafe, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card shadow">
                <img src={cafe.image} className="card-img-top" alt={cafe.name} />
                <div className="card-body">
                  <h5 className="card-title">{cafe.name}</h5>
                  <p className="card-text">📍 {cafe.location}</p>
                  <p className="card-text">
                    ⭐ Rating: {cafe.rating} | Features: {cafe.features.join(", ")}
                  </p>
                  <a href={cafe.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View on Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Pet-Friendly Rules & Tips */}
      <div className="mt-5 p-4 bg-light rounded">
        <h2>Pet-Friendly Café Rules & Tips</h2>
        <ul>
          <li>🐶 Keep your pet on a leash at all times.</li>
          <li>🍖 Use designated pet seating areas.</li>
          <li>💧 Ensure your pet stays hydrated.</li>
          <li>🧹 Clean up after your pet.</li>
        </ul>
      </div>

      {/* Book a Table Button */}
      <div className="text-center my-4">
        <button className="btn btn-success btn-lg">Book a Table for You & Your Pet</button>
      </div>
    </div>
  );
};

export default PetCafes;