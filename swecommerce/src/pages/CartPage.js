import React, { Component } from 'react';
import CartItemsList from '../components/CartItemsList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    cart: {
        marginTop: 64,
    },
});

export default withStyles(styles) (class Cart extends Component {
    
    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.cart }>
                <h5>Meu carrinho</h5>
                <CartItemsList />
            </div>
        );
    }
})