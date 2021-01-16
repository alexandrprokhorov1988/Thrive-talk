import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from '../Header/Header';
import Info from '../Info/Info';
import About from '../About/About';
import InfoSecond from '../InfoSecond/InfoSecond';
import InfoThird from '../InfoThird/InfoThird';
import Advice from '../Advice/Advice';
import TrainingAdvice from '../TrainingAdvice/TrainingAdvice';
import Plans from '../Plans/Plans';
import Footer from '../Footer/Footer';
import Contacts from '../Contacts/Contacts';

function App() {
  return (
    <div className="page">
      <Route exact path="*">
        <Header/>
        <main className="content">
          <Info/>
          <About/>
          <TrainingAdvice/>
          <Advice/>
          <Plans/>
          <InfoSecond/>
          <InfoThird/>
          <Contacts/>
          <Footer/>
        </main>
      </Route>
    </div>
  );
}

export default App;
