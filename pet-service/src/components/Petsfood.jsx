
const pets = [
  { id: 1, name: "DOG FOOD", image: "https://image.chewy.com/catalog/cms/images/110183-Iams-Dog-Food-original._SY222__V1712021346_.jpeg" },
  { id: 2, name: "DOGS FLEA & TICK", image: "https://image.chewy.com/catalog/cms/images/2023-05-Recipe-2-FrontlinePlus-Dog-FleaTick-original._SY222__V1712021347_.jpeg" },
  { id: 3, name: "DOG TREATS", image: "https://image.chewy.com/catalog/cms/images/2023-02-Dog-Treats-ePLP-Recipe2-3-50345-original._SY222__V1711567627_.jpeg" },
  { id: 4, name: "CAT FOOD", image: "https://image.chewy.com/catalog/cms/images/2023-04-NonSku-Recipe2-140273-original._SY222__V1712021347_.jpeg" },
  { id: 5, name: "CAT LITTER", image: "https://image.chewy.com/catalog/cms/images/47416-Litter-Cat-original._SY222__V1712021347_.jpeg" },

];

const Petsfood = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">Our Pets Food</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {pets.map((pet) => (
          <div key={pet.id} className="text-center">
            <img 
              src={pet.image} 
              alt={pet.name} 
              className="rounded-circle border border-warning border-4 p-1 img-fluid" 
              style={{ width: "200px", height: "200px" }} // Custom Inline Bootstrap
            />
            <p className="mt-2 fw-bold h5 mb-5">{pet.name}</p> {/* Text ko bhi chhota kiya */}
          </div>
        ))}
       <img className="img mt-5" src="https://wallpapers.com/images/hd/paw-patrol-mighty-pups-wl7wp77ur9oc01rv.jpg" alt=""   />

      </div>
    </div>
  );
};

export default Petsfood;
