import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark navbar-red navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">SW e-commerce</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Itens</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Adicionar Item</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/cart" className="nav-link">
                                    <ShoppingCartIcon />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}