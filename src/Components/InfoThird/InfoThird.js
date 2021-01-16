import React from 'react';
import '../InfoSecond/InfoSecond.css';
import './InfoThird.css';
import imgThird from '../../images/info-third.png';

function InfoThird() {

  return (
    <section className="info-second info-second_type_info-third">
      <div className="info-second__container">
        <h2 className="info-second__text info-second__text_type_info_third">CONTACT US</h2>
        <p className="info-third__title">Ready. Set. Smile</p>
        <p className="info-second__text-main info-second__text-main_type_info-third">
          Take the free online assessment to see if you are a candidate and get started on your journey.
        </p>
        <button className="info-second__button info-second__button_type_info-third">GET HELP NOW</button>
      </div>
      <div className="info-second__img-hider">
        <img className="info-second__img" src={imgThird} alt="Картинка"/>
      </div>
    </section>
  );
}

export default InfoThird;
