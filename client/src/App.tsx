import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search/Search'
import ItemList from './page/list'
import { BrowserRouter, Link } from 'react-router-dom'
import SiteRouter from './router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SiteRouter />
      </div>
    </BrowserRouter >
  );
}

export default App;
