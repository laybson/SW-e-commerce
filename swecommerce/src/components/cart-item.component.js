import React, { Component } from 'react';
import PropTypes from 'prop-types';
import promos from './promos';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {TextField, Select, IconButton} from '@material-ui/core';

export default class CartItem extends Component {
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
        return (
            <tr>        
                <td>{ item.itemName }</td>
                <td>{ item.itemPrice }</td>
                <td><TextField
                        value={ quantity }
                        onChange={                            
                            (e) => { this.props.updateQuantity(item._id, e) }
                        }
                        type="number"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin="normal"
                    /></td>
                <td> <Select native                      
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
                    </Select> </td>
                <td>{ totalPrice }</td>
                <td>
                    <IconButton dense="dense" onClick={() => {
                        this.props.deleteCartItem(item._id)}}>
                        <DeleteForeverIcon />
                    </IconButton>
                </td>
            </tr>
        );
    }
}