import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import ItemsList from './pages/ItemsListPage';
import Cart from './pages/CartPage';
import Management from './pages/ManagementPage';;

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <div className="container">
        <Route path="/" exact component={ItemsList} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/management" exact component={Management} />
      </div>
    </Router>
  );
}

export default App;
