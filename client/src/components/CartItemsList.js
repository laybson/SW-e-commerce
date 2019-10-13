import React, { Component } from 'react';
import CartItem from './CartItem';
import cart from '../helpers/cart-helper';
import currencyFormat from '../helpers/currency-format-helper';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';

const styles = theme => ({
    cartItemsList: {
        fontSize: 15,
        width: '100%',
        fontWeight: 700,
    },
    th: {
        fontSize: 15,
        fontWeight: 700,
    }
});

export default withStyles(styles) (class CartItemsList extends Component {
    constructor(props) {
        super(props);

        this.deleteCartItem = this.deleteCartItem.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.hasQuantity = this.hasQuantity.bind(this);
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
    
    updateQuantity = (id, e) => {
        e.preventDefault();
        cart.updateQuantity(id, e.target.value)

        this.setState({ 
            cartItems: cart.getCart(),
            totalPrice: cart.getTotalPrice()
        })
    }

    hasQuantity = (id, e) => {
        e.preventDefault();
        if(e.target.value <= 0){
            cart.deleteCartItem(id)
            this.setState({ 
                cartItems: cart.getCart(),
                totalPrice: cart.getTotalPrice()
            })
        }
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
                hasQuantity={ this.hasQuantity }
                selectPromo={ this.selectPromo }
                key={ currentCartItem.item._id }/>
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Table className={classes.cartItemsList}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.th} align="center">Item</TableCell>
                            <TableCell className={classes.th} align="center">Preço</TableCell>
                            <TableCell className={classes.th} align="center">Quantidade</TableCell>
                            <TableCell className={classes.th} align="center">Promoção</TableCell>
                            <TableCell className={classes.th} align="center">Subtotal</TableCell>
                            <TableCell colSpan={3}/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { this.cartItemsList() }
                        <TableRow>
                            <TableCell colSpan={3} />
                            <TableCell className={classes.th} colSpan={2}>Preço Total:</TableCell>
                            <TableCell className={classes.th} align="right">{ currencyFormat.formatReal(this.state.totalPrice) }</TableCell>               
                        </TableRow>
                    </TableBody>     
                </Table>
            </div>
        );
    }
})