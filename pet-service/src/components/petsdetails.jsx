
import { useParams } from "react-router-dom";

const pets = [
  { id: "1", name: "DOG", image: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Dog_115-original._SY222__V1712351227_.jpeg", description: "Dogs are loyal companions and great family pets." },
  { id: "2", name: "CAT", image: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Cat_116-original._SY222__V1712351227_.jpeg", description: "Cats are independent and loving pets that make great indoor companions." },
  { id: "3", name: "HORSE", image: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Horse_117-original._SY222__V1712351228_.jpeg", description: "Horses are strong and majestic animals, often used for riding and farming." },
  { id: "4", name: "PARROT", image: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_PetBird_119-original._SY222__V1712351234_.jpeg", description: "Parrots are intelligent and colorful birds that can mimic human speech." },
  { id: "5", name: "FISH", image: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Fish_154-original._SY222__V1712344938_.jpeg", description: "Fish are peaceful pets that bring tranquility to any home." },
  { id: "6", name: "GOAT", image: "https://image.chewy.com/catalog/general/images/moe/0674668a-9adc-7df1-8000-81cf9f0da3cd._SY222_.jpeg", description: "Goats are friendly and useful farm animals known for their playful nature." }
];

const PetDetails = () => {
  const { id } = useParams();
  const pet = pets.find(p => p.id === id);

  if (!pet) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-danger">Pet Not Found</h2>
        <p>The pet you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">{pet.name}</h2>
      <img
        src={pet.image}
        alt={pet.name}
        className="rounded-circle border border-warning border-4 p-2"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <p className="mt-3">{pet.description}</p>
    </div>
  );
};

export default PetDetails;
