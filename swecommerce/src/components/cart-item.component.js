import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
    static propTypes = {
        cartItem: PropTypes.object.isRequired,
        deleteCartItem: PropTypes.func.isRequired,
        updateQuantity: PropTypes.func.isRequired
    }

    render() {
        const { item, quantity } = this.props.cartItem;
        return (
            <tr>        
                <td>{ item.itemName }</td>
                <td>{ item.itemPrice }</td>
                <td><input
                        type="number"
                        className="form-control"
                        value={ quantity }
                        onChange={                            
                            (e) => { this.props.updateQuantity(item._id, e) }
                        }/></td>
                <td> Metade do dobro </td>
                <td>{ item.itemPrice }</td>
                <td>                         
                    <a href="#" onClick={() => {
                        this.props.deleteCartItem(item._id)}}>
                        delete
                    </a>
                </td>
            </tr>
        );
    }
}