import React from 'react';
import './App.css';

function App() {
  return (
   <>
      <div class="page">
        <header class="header">
          <a href="#"><img class="header header__logo" src="<%=require('./images/logo.png')%>"   alt="Логотип mesto" /></a>
        </header>
        <main class="content">
          <section class="profile">
            <div class="profile__avatar"></div>
            <div class="profile__info">
              <h1 class="profile__title">Жак-Ив Кусто</h1>
              <button class="profile__edit-btn" type="button"></button>
              <p class="profile__subtitle">Исследователь&nbsp;океана</p>
            </div>
              <button class="profile__add-btn" type="button"></button>
          </section>
          <div class="elements" >
            <ul class="elements-list">
            </ul>
          </div>
        </main>
        <footer class="footer">
          <p class="footer__copyright">&copy; 2020. Mesto Russia</p>
        </footer>
      </div>
      <section class="popup popup_edit">
        <div class="popup__block">
          <button class="popup__close-btn popup__close-btn_edit" type="reset"></button>
          <form name="form" class="popup__container" novalidate>
            <h2 class="popup__title">Редактировать профиль</h2>
            <input id="text-input" required class="popup__text popup__text_value_name" type="text" name="name" value="Жак-Ив" minlength="2" maxlength="40" />
            <span class="popup__input-error text-input-error"></span>
            <input id="job-input" required class="popup__text popup__text_value_job" type="text" name="job" value="Исследователь океана" minlength="2" maxlength="200" />
            <span class="popup__input-error job-input-error"></span>
            <button disabled type="submit" value="Сохранить" class="popup__save-btn">Сохранить</button>
          </form>
        </div> 
      </section>
      <section class="popup popup_add-newcard">
        <div class="popup__block">
          <button class="popup__close-btn popup__close-btn_add" type="reset"></button>
          <form name="form" class="popup__container" novalidate>
            <h2 class="popup__title">Новое место</h2>
            <input id="place-input" required class="popup__text popup__text_value_place" value="" type="text" name="name" minlength="2" maxlength="30" placeholder="Введите название места" />
            <span class="popup__input-error place-input-error"></span>
            <input id="link-input" required class="popup__text popup__text_value_link" value="" type="url" name="link" placeholder="Введите ссылку на изображение" />
            <span class="popup__input-error link-input-error"></span>
            <button disabled type="submit" value="Сбросить" class="popup__save-btn">Создать</button>
          </form>
        </div>
      </section>
      <section class="popup popup_confirm-removal">
        <div class="popup__block">
          <button class="popup__close-btn popup__close-btn_add" type="reset"></button>
          <form name="form" class="popup__container" novalidate>
            <h2 class="popup__title">Вы уверены?</h2>
            <input type="submit" value="Да" class="popup__save-btn" />
          </form>
        </div>
      </section>
      <section class="popup popup_update-avatar">
        <div class="popup__block">
          <button class="popup__close-btn popup__close-btn_add" type="reset"></button>
          <form name="form" class="popup__container" novalidate>
            <h2 class="popup__title">Обновить аватар</h2>
            <input id="link-inp" required class="popup__text popup__text_value_link" value="" type="url" name="link" minlength="2" placeholder="Введите ссылку на изображение" />
            <span class="popup__input-error link-inp-error"></span>
            <button type="submit" value="Сбросить" class="popup__save-btn">Сохранить</button>
          </form>
        </div>
      </section>
      <section class="popup popup_image">
        <div class="popup__block">
          <button class="popup__close-btn popup__close-btn_image" type="reset"></button>
          <div name="form" class="popup__image-container">
            <img class="popup__image-big" alt="#" src="#" />
            <p class="popup__image-name">город</p>
          </div>
        </div>
      </section>

      <template class="template">
        <li class="element">
          <button class="element__trash" type="button"></button>
          <img class="element__image" src="#" alt="Изображен пейзаж" />
          <div class="element__place">
            <h2 class="element__title"></h2>
            <div class="element__like">
              <button class="element__icon" type="button"></button>
              <div class="element__counter"></div>
          </div>
          </div>
        </li>
      </template>
   </>
  );
}

export default App;
