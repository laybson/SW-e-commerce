import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddCartItem from './add-cart-item.component';

export default class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        deleteItem: PropTypes.func.isRequired
    }

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
                    <AddCartItem 
                        item={ this.props.item }/>                    
                </td>
            </tr>            
        );
    }
}