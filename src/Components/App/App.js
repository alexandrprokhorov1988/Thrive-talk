import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from '../Header/Header';
import Info from '../Info/Info';
import About from '../About/About';
import InfoSecond from '../InfoSecond/InfoSecond';
import InfoThird from '../InfoThird/InfoThird';

function App() {
  return (
    <div className="page">
      <Route exact path="*">
        <Header/>
        <main className="content">
          <Info/>
          <About/>
          <InfoSecond/>
          <InfoThird/>
        </main>
      </Route>
    </div>
  );
}

export default App;
