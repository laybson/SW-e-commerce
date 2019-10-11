import React, { Component } from 'react';
import CartItemsList from '../components/CartItemsList';
import cart from '../helpers/cart-helper';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    cart: {
        marginTop: 64,
    },
    noCart: {
        fontSize: 25,
        fontWeight: 700,
        color: "#CACACA",
        textAlign: 'center',
        marginTop: '15%',
    }
});



export default withStyles(styles) (class Cart extends Component {
    hasCartItems = () => {
        return cart.getCart().length !== 0
    }

    render() {
        const { classes } = this.props;
        let page;
        if(this.hasCartItems()){
            page =  <div>
                        <h5>Meu carrinho</h5>
                        <CartItemsList />
                    </div>
        } else {
            page =  <div>
                        <Typography className={ classes.noCart }>
                            Seu carrinho está vazio :(
                        </Typography>                        
                    </div>
        }

        return (
            <div className={ classes.cart }>
                {page}
            </div>
        );
    }
})