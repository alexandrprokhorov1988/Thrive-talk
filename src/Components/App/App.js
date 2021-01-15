import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from '../Header/Header';
import Info from '../Info/Info';

function App() {
  return (
    <div className="page">
      <Route exact path="*">
        <Header/>
        <main className="content">
          <Info/>
        </main>
      </Route>
    </div>
  );
}

export default App;
