import React, {useState} from 'react';
import './CardList.css';

function CardVertical({ title, subtitle, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

function CardHorizontal({ title, subtitle, image }){
  return (
    <div className="card-horizontal">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

function CardList({ data, horizontal}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = data.length / 2; 

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

  return horizontal? (
    <div className="card-list-wrapper">
      <div className="card-list-container">
        <div
          className="card-list-horizontal"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {data.map((item, index) => (
            <CardHorizontal
            key={index} 
            title={item.title} 
            subtitle={item.subtitle} 
            image={item.image} 
            />
          ))}
        </div>
      </div>
      <div className="btns">
        <div className="sizeBox"/>
        <button className="prev-btn" onClick={prevCards}><span className="material-icons">chevron_left</span></button>
        <button className="next-btn" onClick={nextCards}><span className="material-icons">chevron_right</span></button>
      </div>
    </div>
  ) : (
    <div className="card-list">
      {data.map((item, index) => (
        <CardVertical
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
        />
      ))}
    </div>
  );
}


export default CardList;