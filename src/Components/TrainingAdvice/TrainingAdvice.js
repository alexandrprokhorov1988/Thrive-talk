import React from 'react';
import './TrainingAdvice.css';

function TrainingAdvice() {

  return (
    <section className="training-advice">
      <div className="training-advice__row">
      <article className="training-advice__card">
        <p className="training-advice__text">Weight Lifting</p>
      </article>
      <article className="training-advice__card training-advice__card_theme_second">
        <p className="training-advice__text">Running & Spinning</p>
      </article>
      </div>
      <div className="training-advice__row">
      <article className="training-advice__card training-advice__card_theme_third">
        <p className="training-advice__text">Pumping Iron</p>
      </article>
      <article className="training-advice__card training-advice__card_theme_four">
        <p className="training-advice__text">Pumping Iron</p>
      </article>
      </div>
    </section>
  )
}

export default TrainingAdvice;
