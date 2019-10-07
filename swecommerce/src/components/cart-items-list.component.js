import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartItem from './cart-item.component';

export default class CartItemsList extends Component {
    constructor(props) {
        super(props);

        this.deleteCartItem = this.deleteCartItem.bind(this);
        this.addCartItem = this.addCartItem.bind(this);

        this.state = {
            cartItems: []
        };
    }

    componentDidMount() {        
        this.setState({
            cartItems: this.state.cartItems
        });
    }

    deleteCartItem(id) {           
        this.setState({
            cartItems: this.state.cartItems.filter(el => el.item._id !== id)
        })
    }

    addCartItem(item) {        
        const cartItem = {
            item: item,
            quantity: 1            
        }
        this.cartItems.push(cartItem);
    } 
    
    cartItemsList() {
        console.log(this.state.cartItems)
        return this.state.cartItems.map(currentItem => {
            return <CartItem 
                cartItem={ currentItem }
                deleteCartItem={ this.deleteCartItem }
                key={ currentItem._id }/>
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