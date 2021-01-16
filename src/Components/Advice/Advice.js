import React from 'react';
import './Advice.css';

function Advice() {

  return (
    <section className="advice">
      <article className="advice__card">
        <p className="advice__text">Physical Health</p>
      </article>
      <article className="advice__card advice__card_theme_second">
        <p className="advice__text">Mental Health</p>
      </article>
      <article className="advice__card advice__card_theme_third">
        <p className="advice__text">Nutrition</p>
      </article>
      <article className="advice__card advice__card_theme_four">
        <p className="advice__text">Gymnastics</p>
      </article>
      <article className="advice__card advice__card_theme_five">
        <p className="advice__text">Crossfit</p>
      </article>
      <article className="advice__card advice__card_theme_six">
        <p className="advice__text">Aerobics</p>
      </article>
    </section>
  );
}

export default Advice;
