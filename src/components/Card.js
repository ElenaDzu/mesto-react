
import React from 'react';

function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }  

  return (
        <li className="element">
          <button className="element__trash" type="button"></button>
          <img className="element__image" onClick={handleClick} style={{ backgroundImage: `url(${card.link})` }} src={card.link} alt="Изображен пейзаж" />
          <div className="element__place">
            <h2 className="element__title">{card.name}</h2>
            <div className="element__like">
              <button className="element__icon" type="button"></button>
              <div className="element__counter">{card.likes.length}</div>
          </div>
          </div>
        </li>
  );
}

export default Card;
