
import React, { useState, useEffect } from 'react';
import {api} from '../utils/Api.js'
import Card from './Card.js'

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  useEffect(() => {
   api.getUserInfo().then(data => {
    setUserName(data.name)
    setUserDescription(data.about);
    setUserAvatar(data.avatar);
    });

    api.getInitialCards().then(cards =>  {
      setCards(cards)
  });
}, []);
 
  return (
   <>
        <main className="content">
          <section className="profile">
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} onClick={onEditAvatar} ></div>
            <div className="profile__info">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__edit-btn" onClick={onEditProfile} type="button"></button>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
              <button className="profile__add-btn" onClick={onAddPlace} type="button"></button>
          </section>
          <div className="elements" >
            <ul className="elements-list">
            {cards.map(card => (<Card onCardClick={onCardClick} key={card._id} card={card} />
            ))}
            </ul>
          </div>
        </main>

   </>
  );
}

export default Main;
