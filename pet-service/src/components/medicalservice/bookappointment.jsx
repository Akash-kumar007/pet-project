import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    petName: "",
    ownerName: "",
    contact: "",
    date: "",
    time: "",
    service: "",
    doctor: ""
  });

  const services = ["General Checkups", "Emergency Care", "Surgeries", "Vaccinations", "Nutrition & Diet"];
  const doctors = ["Dr. Emily Carter", "Dr. John Smith"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Appointment booked successfully for ${formData.petName} on ${formData.date} at ${formData.time}!`);
  };

  return (
    <div className="container-fluid bg-light py-5" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-lg p-4 border-0 rounded-4">
              <h2 className="text-center mb-4 text-primary fw-bold">🐾 Book an Appointment</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">🐶 Pet Name</label>
                  <input type="text" className="form-control" name="petName" value={formData.petName} onChange={handleChange} required placeholder="Enter your pet's name" />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">👤 Owner Name</label>
                  <input type="text" className="form-control" name="ownerName" value={formData.ownerName} onChange={handleChange} required placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">📞 Contact Number</label>
                  <input type="tel" className="form-control" name="contact" value={formData.contact} onChange={handleChange} required placeholder="Enter your contact number" />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">📅 Date</label>
                    <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">⏰ Time</label>
                    <input type="time" className="form-control" name="time" value={formData.time} onChange={handleChange} required />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">🩺 Select Service</label>
                  <select className="form-select" name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Choose a Service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">👨‍⚕️ Select Doctor (Optional)</label>
                  <select className="form-select" name="doctor" value={formData.doctor} onChange={handleChange}>
                    <option value="">Choose a Doctor</option>
                    {doctors.map((doctor, index) => (
                      <option key={index} value={doctor}>{doctor}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100 fw-bold py-2 mt-3">📅 Confirm Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
