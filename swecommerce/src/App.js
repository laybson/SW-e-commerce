import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar.component';
import ItemsList from './components/items-list.component';
import EditItem from './components/edit-item.component';
import CreateItem from './components/create-item.component';
import Cart from './components/cart.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <div className="container">
        <Route path="/" exact component={ItemsList} />
        <Route path="/edit/:id" exact component={EditItem} />
        <Route path="/create" exact component={CreateItem} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </Router>
  );
}

export default App;
