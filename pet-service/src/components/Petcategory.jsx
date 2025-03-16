import { Link } from "react-router-dom";

const pets = [
  { id: "1", name: "DOG", image: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Dog_115-original._SY222__V1712351227_.jpeg" },
  { id: "2", name: "CAT", image: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Cat_116-original._SY222__V1712351227_.jpeg" },
  { id: "3", name: "HORSE", image: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Horse_117-original._SY222__V1712351228_.jpeg" },
  { id: "4", name: "PARROT", image: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_PetBird_119-original._SY222__V1712351234_.jpeg" },
  { id: "5", name: "FISH", image: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Fish_154-original._SY222__V1712344938_.jpeg" },
  { id: "6", name: "GOAT", image: "https://image.chewy.com/catalog/general/images/moe/0674668a-9adc-7df1-8000-81cf9f0da3cd._SY222_.jpeg" }
];

const Petcategory = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">Our Lovely Pets</h2>
      <div className="row justify-content-center">
        {pets.map((pet) => (
          <div key={pet.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card border-0 d-flex align-items-center">
              <Link to={`/pet/${pet.id}`} style={{ textDecoration: "none", color: "black" }}>
                <img src={pet.image} alt={pet.name} className="rounded-circle border border-warning border-4 p-2 pet-image" />
                <p className="mt-2 fw-bold h5">{pet.name}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Petcategory;
