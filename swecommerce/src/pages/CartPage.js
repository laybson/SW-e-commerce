import React, { Component } from 'react';
import CartItemsList from '../components/CartItemsList';

export default class Cart extends Component {
    
    render() {
        return (
            <div>
                <h3>Cart Items</h3>
                <CartItemsList />
            </div>
        );
    }
}