import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import petBanner from "../../assets/5dogs.jpg";
import petBackground from "../../assets/Dillon-Blur-11.webp";

const PetTicket = () => {
  const [formData, setFormData] = useState({
    petName: "",
    ownerName: "",
    contact: "",
    ticketType: "vet",
    date: "",
    description: "",
    petPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, petPhoto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ticket Submitted Successfully!");
    console.log(formData);
  };

  return (
    <div
      className="container mt-5"
      style={{ backgroundImage: `url(${petBackground})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "10px", padding: "20px" }}
    >
      <div className="text-center mb-4">
        <img src={petBanner} alt="Pet Service" className="img-fluid rounded" style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }} />
      </div>
      <div className="card p-4 shadow" style={{ background: "rgba(255, 255, 255, 0.9)" }}>
        <h2 className="mb-4 text-center">Pet Service Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Pet Name:</label>
            <input type="text" name="petName" className="form-control" value={formData.petName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Owner Name:</label>
            <input type="text" name="ownerName" className="form-control" value={formData.ownerName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Contact Number:</label>
            <input type="text" name="contact" className="form-control" value={formData.contact} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Ticket Type:</label>
            <select name="ticketType" className="form-select" value={formData.ticketType} onChange={handleChange}>
              <option value="vet">Vet Appointment</option>
              <option value="grooming">Grooming</option>
              <option value="adoption">Adoption</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Appointment Date:</label>
            <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea name="description" className="form-control" rows="4" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Upload Pet Photo:</label>
            <input type="file" className="form-control" onChange={handleFileChange} />
          </div>
          <button type="submit" className="btn btn-success w-100">Submit Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default PetTicket;
