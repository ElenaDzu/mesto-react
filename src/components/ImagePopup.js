import React from 'react';
import '../index.css';



function ImagePopup(props) {
  return (
    <section className={`popup popup_image ${props.card ? "popup_opened" : ""}`}>
    <div className="popup__block">
      <button className="popup__close-btn popup__close-btn_image" onClick={props.onClose} type="reset"></button>
      <div name="form" className="popup__image-container">
        <img className="popup__image-big" style={{ backgroundImage: `url(${props.card.link})` }} alt={props.card.name} src={props.card.link} />
        <p className="popup__image-name">{props.card.name}</p>
      </div>
    </div>
  </section>
  );
}

export default ImagePopup;
