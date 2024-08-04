import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import "./Favourites.css";

const Favourites = () => {

  const favouritesData = [
    {
      title: "Chicken Pasta",
      author: "Thomas Dean",
      image: "/chicken-pasta.png",
      rating: 5,
    },
    {
      title: "Mexican Salad",
      author: "Peter Griffin",
      image: "/mexican-salad.png",
      rating: 5,
    },
    {
      title: "Strawberry Ice-cream",
      author: "Linda",
      image: "/strawberry-ice-cream.png",
      rating: 5,
    },
    {
      title: "Raspberry Pastry",
      author: "Jessy",
      image: "/raspberry-pastry.png",
      rating: 4.5,
    },
  ];

  const [favorites, setFavorites] = useState(
    Array(favouritesData.length).fill(false)
  );

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  return (
    <div className="favourites">
      <h1>Favourites</h1>
      <div className="favourites-list">
        {favouritesData.map((item, index) => (
          <div className="favourite-item" key={index}>
            <div className="image-container">
              <img
                src={item.image}
                alt={item.title}
                className="favourite-image"
              />
              <FontAwesomeIcon
                // icon={favorites[index] ? solidHeart : regularHeart}
                className={`heart-icon ${favorites[index] ? "selected" : ""}`}
                onClick={() => toggleFavorite(index)}
              />
            </div>
            <h2>{item.title}</h2>
            <p>- {item.author}</p>
            <div className="rating">
              {Array.from({ length: Math.floor(item.rating) }, (_, i) => (
                <span key={i}>⭐</span>
              ))}
              {item.rating % 1 !== 0 && <span>⭐️</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
