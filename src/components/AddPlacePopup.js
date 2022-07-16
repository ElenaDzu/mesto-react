import { React, useRef } from "react";
import "../index.css";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameRef = useRef();
  const linkRef = useRef();

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
    onClose();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
      title="Новое место"
      name="add-newcard"
    >
      <input
        id="place-input"
        required
        className="popup__text popup__text_value_place"
        defaultValue=""
        type="text"
        name="name"
        minLength="2"
        maxLength="30"
        placeholder="Введите название места"
        ref={nameRef}
      />
      <span className="popup__input-error place-input-error"></span>
      <input
        id="link-input"
        required
        className="popup__text popup__text_value_link"
        defaultValue=""
        type="url"
        name="link"
        placeholder="Введите ссылку на изображение"
        ref={linkRef}
      />
      <span className="popup__input-error link-input-error"></span>
      <button type="submit" defaultValue="Сбросить" className="popup__save-btn">
        Создать
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
