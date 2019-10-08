import React, { Component } from 'react';
import CartItem from './cart-item.component';
import cart from './cart-actions';

export default class CartItemsList extends Component {
    constructor(props) {
        super(props);

        this.deleteCartItem = this.deleteCartItem.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.selectPromo = this.selectPromo.bind(this);

        this.state = {
            cartItems: [],
            totalPrice: 0
        };
    }

    componentDidMount = () => {
        this.setState({ 
            cartItems: cart.getCart(),
            totalPrice: cart.getTotalPrice()
        })
    }
    
    deleteCartItem = (id) => {               
        this.setState({
            cartItems: cart.deleteCartItem(id),
            totalPrice: cart.getTotalPrice()
        })
    }
    
    updateQuantity = (id ,e) => {
        e.preventDefault();
        cart.updateQuantity(id, e.target.value)

        this.setState({ 
            cartItems: cart.getCart(),
            totalPrice: cart.getTotalPrice()
        })
    }

    selectPromo = (id ,e) => {
        cart.updatePromo(id, e.target.value)
        this.setState({ 
            cartItems: cart.getCart(),
            totalPrice: cart.getTotalPrice()
        })
    }
    
    cartItemsList() {        
        return this.state.cartItems.map(currentCartItem => {
            return <CartItem 
                cartItem={ currentCartItem }
                deleteCartItem={ this.deleteCartItem }
                updateQuantity={ this.updateQuantity }
                selectPromo={ this.selectPromo }
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
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Promoção</th>
                            <th>Preço Total</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.cartItemsList() }
                    </tbody>
                </table>
                <div>
                    <h5>Total: { this.state.totalPrice }</h5>
                </div>
            </div>
        );
    }
}