import React, { Component } from 'react';
import axios from 'axios';

export default class CartItem extends Component {
    constructor(props) {
        super(props);

        this.onChangeQuantity = this.onChangeQuantity.bind(this);

        this.state = {           
            quantity: 1
        }
    }    

    onChangeQuantity(e) {
        this.setState({
            itemName: e.target.value
        });
    }

    render() {
        return (
            <div>
                <tr>        
                    <td>{ this.item.itemName }</td>
                    <td>{ this.item.itemPrice }</td>
                    <td>{ this.quantity }</td>
                    <td>                         
                        <a href="#" onClick={() => {
                            this.deleteCartItem(this.item._id)}}>
                            delete
                        </a>
                    </td>
                </tr>
            </div>
        );
    }
}