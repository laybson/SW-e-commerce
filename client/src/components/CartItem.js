import React, { Component } from 'react';
import PropTypes from 'prop-types';
import promos from '../helpers/promo-helper';
import currencyFormat from '../helpers/currency-format-helper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Tooltip, TextField, Select, IconButton, Typography, TableRow, TableCell} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    cartItem: {             
    },
    typos: {
        fontSize: 15,
        fontWeight: 700,
        color: "#777777",
    },
    quantity: {
        maxWidth: 48,
    },
    icon: {
        maxWidth: 48,
    },
    title: {
        minWidth: 400,
    }
});

export default withStyles(styles) (class CartItem extends Component {
    static propTypes = {
        cartItem: PropTypes.object.isRequired,
        deleteCartItem: PropTypes.func.isRequired,
        updateQuantity: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            promosList: []
        };
    }

    componentDidMount = () => {
        console.log(promos)
        this.setState({ promosList: Object.keys(promos) })
    }
    render() {
        const { item, quantity, promo, totalPrice } = this.props.cartItem;
        const { classes } = this.props;

        return (   
            <TableRow key={item._id}>
                <TableCell  className={classes.title}>
                    <Typography noWrap className={classes.typos}>
                        { item.itemName }
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography className={classes.typos}>
                        { currencyFormat.formatReal(item.itemPrice) }
                    </Typography>
                </TableCell>
                <TableCell align="center">
                    <TextField
                        className={classes.quantity}
                        value={ quantity }
                        onChange={                            
                            (e) => { this.props.updateQuantity(item._id, e) }
                        }
                        type="number"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin="normal"
                    />
                </TableCell>
                <TableCell align="center">
                    <Select native                      
                        value={ promo }
                        onChange={ 
                            (e) => { this.props.selectPromo(item._id, e) }
                        }>
                        <option value={ null }></option> +
                        {
                            this.state.promosList.map((promo) => {
                            return <option 
                                key={promo}
                                value={promo}>{promo}
                                </option>;
                            })
                        }
                    </Select>
                </TableCell>
                <TableCell align="right">
                    <Typography className={classes.typos}>
                        { currencyFormat.formatReal(totalPrice) }
                    </Typography>
                </TableCell>
                <TableCell className={classes.icon}>
                    <Tooltip title={'Remover '+item.itemName+' do carrinho'}>
                        <IconButton dense="dense" onClick={() => {
                            this.props.deleteCartItem(item._id)}}>
                            <DeleteForeverIcon />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </TableRow>              
        );
    }
})