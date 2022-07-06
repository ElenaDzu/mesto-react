import React, { useState, useEffect } from 'react';
import '../index.css';
import {api} from '../utils/Api.js'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'


function App() {

 const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

 const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

 const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
 
 const [selectedCard, setSelectedCard] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
    }
  
    function handleEditProfileClick() {
      setIsEditProfilePopupOpen(true);
    }
  
    function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
      setSelectedCard(card)
    }

    function closeAllPopups() {
      setIsEditAvatarPopupOpen(false)
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setSelectedCard(false)
    }

  return (
    
    <div className="container">
      <div className="page">
      <Header />
      <Main 
         onEditProfile={handleEditProfileClick}
         onAddPlace={handleAddPlaceClick}
         onEditAvatar={handleEditAvatarClick}
         onCardClick={handleCardClick}
      />
      <Footer />
      </div>
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title='Редактировать профиль' name='edit'>
      <input id="text-input" required className="popup__text popup__text_value_name" type="text" name="name" defaultValue="Жак-Ив" minLength="2" maxLength="40" />
            <span className="popup__input-error text-input-error"></span>
            <input id="job-input" required className="popup__text popup__text_value_job" type="text" name="job" defaultValue="Исследователь океана" minLength="2" maxLength="200" />
            <span className="popup__input-error job-input-error"></span>
            <button disabled type="submit" defaultValue="Сохранить" className="popup__save-btn">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title='Новое место' name='add-newcard'>
            <input id="place-input" required className="popup__text popup__text_value_place" defaultValue="" type="text" name="name" minLength="2" maxLength="30" placeholder="Введите название места" />
            <span className="popup__input-error place-input-error"></span>
            <input id="link-input" required className="popup__text popup__text_value_link" defaultValue="" type="url" name="link" placeholder="Введите ссылку на изображение" />
            <span className="popup__input-error link-input-error"></span>
            <button disabled type="submit" defaultValue="Сбросить" className="popup__save-btn">Создать</button>
      </PopupWithForm>

      <PopupWithForm isOpen={false} onClose={closeAllPopups} title='Вы уверены?' name='confirm-removal'>
             <input type="submit" defaultValue="Да" className="popup__save-btn" />
      </PopupWithForm>

       <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title='Обновить аватар' name='update-avatar'>
            <input id="link-inp" required className="popup__text popup__text_value_link" defaultValue="" type="url" name="link" minLength="2" placeholder="Введите ссылку на изображение" />
            <span className="popup__input-error link-inp-error"></span>
            <button type="submit" defaultValue="Сбросить" className="popup__save-btn">Сохранить</button>
       </PopupWithForm>

       <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    
    </div>
  
  );
}

export default App;
