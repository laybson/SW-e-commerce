import React, { Component } from 'react';
import PropTypes from 'prop-types';
import promos from './promos';

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
                <td><input
                        type="number"
                        className="form-control"
                        value={ quantity }
                        onChange={                            
                            (e) => { this.props.updateQuantity(item._id, e) }
                        }/></td>
                <td> <select ref="promoInput"                        
                        className="form-control"                        
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
                    </select> </td>
                <td>{ totalPrice }</td>
                <td>                         
                    <a href="#" onClick={() => {
                        this.props.deleteCartItem(item._id)}}>
                        delete
                    </a>
                </td>
            </tr>
        );
    }
}