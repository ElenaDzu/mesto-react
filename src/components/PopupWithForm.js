import React from 'react';

function PopupWithForm(props) {

 
  return (
      <section className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`} >
        <div className="popup__block">
          <button className="popup__close-btn popup__close-btn_add" onClick={props.onClose} type="reset"></button>
          <form name={props.name} className="popup__container" noValidate>
            <h2 className="popup__title">{props.title}</h2>
             {props.children}
          </form>
        </div>
      </section>
  );
  }
export default PopupWithForm;
