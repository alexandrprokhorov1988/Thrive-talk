import React from 'react';
import './Contacts.css';
import contactsPhoto from '../../images/contacts-photo.png';

function Contacts() {

  return (
    <section className="contacts">
      <div className="contacts__img-hider">
        <img className="contacts__img" src={contactsPhoto} alt="Картинка"/>
      </div>
      <nav className="contacts__nav contacts__nav_type_one">
        <h3 className="contacts__title">SOME INFO</h3>
        <ul className="contacts__list">
          <li className="contacts__list-item">
            <p className="contacts__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula.
            </p>
          </li>
        </ul>
      </nav>
      <nav className="contacts__nav contacts__nav_type_two">
        <h3 className="contacts__title">ENFOLD HEALTH</h3>
        <ul className="contacts__list">
          <li className="contacts__list-item">
            <p className="contacts__text">Main Street 1, Olcott Buffalo, United States</p>
            <p className="contacts__text contacts__text_type_bottom">+555 283 784 333</p>
            <a href="#" className="contacts__link">office@enfold-health.com</a>
          </li>
        </ul>
      </nav>
      <nav className="contacts__nav contacts__nav_type_three">
        <h3 className="contacts__title">OFFICE HOURS</h3>
        <ul className="contacts__list">
          <li className="contacts__list-item">
            <p className="contacts__text">Mo-Fr: 8:00-19:00</p>
            <p className="contacts__text">Sa: 8:00-14:00</p>
            <p className="contacts__text">Su: closed</p>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Contacts;
