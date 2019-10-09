import React, { Component } from 'react';
import cart from '../helpers/cart-helper';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';



export default class AddCartItem extends Component {
    constructor(props) {
        super(props);

        this.addingCartItem = this.addingCartItem.bind(this);
    }    

    addingCartItem(e) {
        e.preventDefault();

        const newCartItem = {
            item: this.props.item
        }
        cart.addCartItem(newCartItem, () => { window.location = '/cart'; });
    }

    render() {
        return (
            <Button variant="outlined"  onClick={(e) => {
                this.addingCartItem(e)}}>
                <span><AddShoppingCartIcon /> </span>  Comprar
            </Button>
        );
    }
}