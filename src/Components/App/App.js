import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from '../Header/Header';

function App() {
  return (
    <div className="page">
      <Route exact path="*">
        <Header/>
        <main className="content">

        </main>
      </Route>
    </div>
  );
}

export default App;
