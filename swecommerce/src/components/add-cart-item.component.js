import React, { Component } from 'react';
import cart from './cart-actions';

export default class AddCartItem extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }    

    onSubmit(e) {
        e.preventDefault();

        const newCartItem = {
            item: this.props.item
        }
        cart.addCartItem(newCartItem, () => {});
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <div className="form-group">
                    <input 
                        type="submit"
                        value="Add to Cart"
                        className="btn btn-primary"/>
                </div>
            </form>
        );
    }
}