import React, { Component } from 'react';
import CartItemsList from './cart-items-list.component';
import Item from './item.component';
import axios from 'axios';
import { GridList, GridListTile } from '@material-ui/core';


export default class ItemsList extends Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
        this.addToCart = this.addToCart.bind(this);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/items/')
            .then(response => {
                this.setState({
                    items: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteItem(id) {
        axios.delete('http://localhost:5000/items/'+id)
            .then(res => console.log(res.data));            
        this.setState({
            items: this.state.items.filter(el => el._id !== id)
        })
    }

    addToCart(id) {        
        axios.get('http://localhost:5000/items/'+id)
            .then(res => {
                console.log("HERE", res.data);
                return <CartItemsList 
                    addCartItem={ this.props.addCartItem(res.data) }/>
            });
    }

    itemsList() {
        return this.state.items.map((currentItem, i) => (
            <GridListTile key={i}>
              <Item 
                item={ currentItem }
                deleteItem={ this.deleteItem }
                key={ currentItem._id }/>
            </GridListTile>
        ))
    }

    render() {
        return (
            <div>
                <h4>Explore nossa loja!</h4>
                <div>
                    <div>
                        <GridList cols={3}>
                            { this.itemsList() }
                        </GridList>
                    </div>
                </div>                
            </div>
        );
    }
}