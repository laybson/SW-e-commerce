import React, { Component } from 'react';
import CartItemsList from './CartItemsList';
import Item from './Item';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    itemsList: {
        marginTop: 64,         
    },
    grid: {
        flexGrow: 1,
    },
});

export default withStyles(styles) (class ItemsList extends Component {        
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
        this.addToCart = this.addToCart.bind(this);

        this.state = {
            items: []
        };
    }    

    componentDidMount() {
        axios.get('/items/')
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
        axios.delete('/items/'+id)
            .then(res => console.log(res.data));            
        this.setState({
            items: this.state.items.filter(el => el._id !== id)
        })
    }

    addToCart(id) {        
        axios.get('/items/'+id)
            .then(res => {
                return <CartItemsList 
                    addCartItem={ this.props.addCartItem(res.data) }/>
            });
    }

    itemsList() {
        return this.state.items.map((currentItem, i) => (
            <Grid key={i}>
              <Item 
                item={ currentItem }
                key={ currentItem._id }/>
            </Grid>
        ))
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.itemsList }>
                <Typography variant="h6" gutterBottom>
                    Explore nossa loja!
                </Typography>
                <div>
                    <div>
                        <Grid container>
                            <Grid item xs={12}>
                                <Grid container justify="center">
                                    { this.itemsList() }
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>            
        );
    }
})