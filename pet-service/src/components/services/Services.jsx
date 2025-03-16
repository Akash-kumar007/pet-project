import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const Services = () => {
  const features = [
    {
      img: "https://image.chewy.com/catalog/cms/images/2023-08-P49-Content-Card-RESIZED-Image1_84-original._SY320__V1712351167_.jpeg",
      title: "High quality, low prices",
      description: "Keep your pet happy & healthy with great prices on the best products."
    },
    {
      img: "https://citizenshipper.com/blog/wp-content/uploads/2023/03/49440632_dog-sitting-next-to-an-open-plastic-carrier-768x511.jpg",
      title: "Fast delivery",
      description: "Get everything delivered right to your door with fast, 1-3 day delivery."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18Jv1y1842A_9TX4NO-G-ndkenheIJs5hOg&s",
      title: "Free 365-day returns",
      description: "If you & your pet aren’t 100% satisfied, return your items within a year at no cost."
    },
    {
      img: "https://image.chewy.com/catalog/cms/images/2023-08-P49-Content-Card-RESIZED-Image2_87-original._SY320__V1712351173_.jpeg",
      title: "24/7 support",
      description: "Got questions? We got you 24/7. Our pet experts are just a call, e-mail, or chat away."
    }
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-3 text-center">
            <img
              src={feature.img}
              alt={feature.title}
              className="img-fluid rounded mb-3"
              style={{ width: "300px", height: "180px", objectFit: "cover" }} // Inline Bootstrap styles
            />
            <h5 className="fw-bold">{feature.title}</h5>
            <p className="text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
