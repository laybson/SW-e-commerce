import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartItem from './cart-item.component';
import cart from './cart-actions';

export default class CartItemsList extends Component {
    constructor(props) {
        super(props);

        this.deleteCartItem = this.deleteCartItem.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);

        this.state = {
            cartItems: []
        };
    }

    componentDidMount = () => {
        this.setState({cartItems: cart.getCart()})
    }
    
    deleteCartItem(id) {               
        this.setState({
            cartItems: cart.deleteCartItem(id)
        })
    }
    
    updateQuantity(id ,e) {
        e.preventDefault();
        cart.updateQuantity(id, e.target.value)

        this.setState({cartItems: cart.getCart()})
    }
    
    cartItemsList() {
        console.log(this.state.cartItems)
        return this.state.cartItems.map(currentCartItem => {
            return <CartItem 
                cartItem={ currentCartItem }
                deleteCartItem={ this.deleteCartItem }
                updateQuantity={ this.updateQuantity }
                key={ currentCartItem.item._id }/>
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Promotion</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.cartItemsList() }
                    </tbody>
                </table>
            </div>
        );
    }
}