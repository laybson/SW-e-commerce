import React, { Component } from 'react';
import cart from './cart-actions';
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