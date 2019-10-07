import React, { Component } from 'react';
import CartItem from './cart-item.component';
import { Link } from 'react-router-dom';
import CartItemsList from './cart-items-list.component';

export default class Cart extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h3>Cart Items</h3>
                <CartItemsList />
            </div>
        );
    }
}