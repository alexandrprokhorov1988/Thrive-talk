import React from 'react';
import './Info.css';
import imgOne from '../../images/info-one.png';

function Info() {

  return (
    <section className="info">
      <div className="info__container">
        <h2 className="info__title">Why Thrive?</h2>
        <p className="info__text">
          <span className="info__text-accent">Want to improve your well-being from the comfort of your own couch? Are you having
          trouble finding the right therapist? </span>
          Here at ThriveTalk, our licensed therapists provide the same quality care
          you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with
          ThriveTalk. Start therapy now with a licensed therapist!</p>
      </div>
      <div className="info__img-hider">
        <img className="info__img" src={imgOne} alt="Картинка"/>
      </div>
    </section>
  );
}

export default Info;
