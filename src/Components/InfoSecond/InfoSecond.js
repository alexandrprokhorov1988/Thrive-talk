import React from 'react';
import './InfoSecond.css';
import imgSecond from '../../images/info-second.png';

function InfoSecond() {

  return (
    <section className="info-second">
      <div className="info-second__img-hider">
        <img className="info-second__img" src={imgSecond} alt="Картинка"/>
      </div>
      <div className="info-second__container">
        <p className="info-second__text">YOU SHOULD ALSO KNOW</p>
        <p className="info-second__text-main">
          MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a
          given year. We at <span className="info-second__text-accent">ThriveTalk</span> can help you.
        </p>
        <button className="info-second__button">GET HELP NOW</button>
      </div>
    </section>
  );
}

export default InfoSecond;
