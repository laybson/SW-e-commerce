import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddCartItem from './add-cart-item.component';
import { Card, CardHeader, CardMedia, CardContent, CardActions} from '@material-ui/core';

export default class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        deleteItem: PropTypes.func.isRequired
    }

    render() {
        const { itemName, itemPrice, _id } = this.props.item;
        return (
            <Card>
                <CardHeader                    
                    subheader={ <span>R${itemPrice}</span> }
                    title={ itemName }
                />
                <CardContent>                    
                    
                </CardContent>
                <CardActions disableSpacing> 
                    <div>
                        <AddCartItem 
                            item={ this.props.item }/>
                    </div>                   
                    <div>
                        <Link to={ "/edit/"+_id }>
                            edit
                        </Link> | 
                        <a href="#" onClick={() => {
                            this.props.deleteItem(_id)}}>
                                delete
                        </a>
                    </div>
                </CardActions>                
            </Card>
        );
    }
}