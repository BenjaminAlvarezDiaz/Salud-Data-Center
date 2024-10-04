import React, { useState } from 'react';
import './ImageList.css';

function ImageList({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = 1; 

  const nextCards = () => {
    setCurrentIndex((index) => {
      const newIndex = index + cardsPerView;
      return newIndex < data.length ? newIndex : index;
    });
  };

  const prevCards = () => {
    setCurrentIndex((index) => {
      const newIndex = index - cardsPerView;
      return newIndex >= 0 ? newIndex : 0;
    });
  };
  return (
    <div className="image-list-wrapper">
      <button className="prev-btn" onClick={prevCards}><span className="material-icons">keyboard_arrow_left</span></button>
      <div className="image-list-container">
      <div
          className="image-list"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {data.map((item, index) => (
            <ImageCard
            key={index} 
            image={item.image}
            index={index}
            />
            ))
          }
        </div>
      </div>
      <button className="next-btn" onClick={nextCards}>
        <span className="material-icons">keyboard_arrow_right</span>
      </button>
    </div>
  );
}

function ImageCard({ image, index }){
    return (
    <div className="image-card">
        <img src={image} alt={index} className="image" />
    </div>
    );
}

export default ImageList;