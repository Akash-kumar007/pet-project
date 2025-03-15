import React, { useState } from "react";
import "./slider.css"
const Slider = () => {
  const slides = [
    {
      id: 1,
      image: "https://www.hdwallpapers.in/download/white_cat_blue_eyes_fluffy_pet_blur_animal_wallpaper_background_4k_hd_cat-3840x2160.jpg",
      title: "Free $20 eGift Card",
      description: "With your $49+ order.",
    },
    {
      id: 2,
      image: "https://images.ctfassets.net/rt5zmd3ipxai/1jRTWB7zd7woJ8aTk3M41q/2a69f7bbb9c54d02cb942daa29a81e0c/NVA_-_MASTER_-_HERO_CARD_-_VAR_A_-_CITY_-_Dog_Biting_Leash_with_Blur_Cityscape_Background.jpg?fit=fill&fm=webp&h=567&w=1485&q=75,%20https://images.ctfassets.net/rt5zmd3ipxai/1jRTWB7zd7woJ8aTk3M41q/2a69f7bbb9c54d02cb942daa29a81e0c/NVA_-_MASTER_-_HERO_CARD_-_VAR_A_-_CITY_-_Dog_Biting_Leash_with_Blur_Cityscape_Background.jpg?fit=fill&fm=webp&h=1134&w=2970&q=75",
      title: "Save 35% Today",
      description: "Set up Autoship and save more!",
    },
    {
      id: 3,
      image: "https://www.shutterstock.com/image-photo/collage-different-animals-including-fish-260nw-2468883079.jpg",
      title: "Free Delivery on Orders Over $35",
      description: "First-time customers only!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slide">
        <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
        <div className="slide-content">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
