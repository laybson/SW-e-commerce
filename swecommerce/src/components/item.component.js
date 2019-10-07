import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import CartItem from './cart-item.component';

export default class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        deleteItem: PropTypes.func.isRequired
    }

    /*addToCart(id) {        
        axios.get('http://localhost:5000/items/'+id)
            .then(res => {
                console.log("HERE", res.data);
                return <CartItem 
                    addCartItem={ this.props.addCartItem(res.data) }                
                 />
            });
    }*/

    render() {
        const { itemName, itemPrice, _id } = this.props.item;
        return (            
            <tr>
                <td>{ itemName }</td>
                <td>{ itemPrice }</td>
                <td>
                    <Link to={ "/edit/"+_id }>
                        edit
                    </Link> | 
                    <a href="#" onClick={() => {
                        this.props.deleteItem(_id)}}>
                            delete
                    </a> |
                    <CartItem 
                        item={ this.props.item }/>                    
                </td>
            </tr>            
        );
    }
}