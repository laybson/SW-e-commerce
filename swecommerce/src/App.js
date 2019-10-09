import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import ItemsList from './pages/ItemsListPage';
import EditItem from './pages/EditItemPage';
import CreateItem from './pages/CreateItemPage';
import Cart from './pages/CartPage';

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
