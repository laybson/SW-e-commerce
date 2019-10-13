import React, { Component } from 'react';
import cart from '../helpers/cart-helper';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    addCartItem: {
        borderRadius: 100,
        minHeight: 30,
        padding: "0 1em",
        "&.MuiButton--large": {
            minHeight: 39
        },
        textTransform: "none",
        fontSize: 15,
        fontWeight: 700,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        '&:hover': {
          transform: 'scale(1.2)',
        },
    },
    iconAdd: {
        height: '70%',
    },
    'hover': {
        transform: 'scale(2.1)',
      },
});

export default withStyles(styles) (class AddCartItem extends Component {
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
        const { classes } = this.props;

        return (
            <Button variant="outlined"  className={ classes.addCartItem }
                onClick={(e) => { this.addingCartItem(e) }}>
                <AddShoppingCartIcon className={ classes.iconAdd } />  Comprar
            </Button>
        );
    }
})