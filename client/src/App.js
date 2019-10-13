import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Items from './pages/ItemsListPage';
import Cart from './pages/CartPage';
import Management from './pages/ManagementPage';;

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <div>
        <Route path="/" exact component={Items} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/management" exact component={Management} />
      </div>
    </Router>
  );
}

export default App;
