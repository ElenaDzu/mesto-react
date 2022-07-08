import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, children}) {
 
  return (
      <section className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`} >
        <div className="popup__block">
          <button className="popup__close-btn popup__close-btn_add" onClick={onClose} type="reset"></button>
          <form name={name} className="popup__container" noValidate>
            <h2 className="popup__title">{title}</h2>
             {children}
          </form>
        </div>
      </section>
  );
}
export default PopupWithForm;