import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddCartItem from './AddCartItem';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { 
    Card, 
    CardHeader, 
    CardMedia, 
    /*CardContent, */
    CardActions,
    IconButton
} from '@material-ui/core';

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
                <CardMedia>                    
                    <div>                    
                        <AddCartItem 
                            item={ this.props.item }/>
                    </div>
                </CardMedia>
                <CardActions disableSpacing>
                    <div>
                        <Link to={ "/edit/"+_id }>
                            <IconButton dense="dense">
                                <EditIcon />
                            </IconButton>
                        </Link>
                        <IconButton dense="dense" onClick={() => {
                            this.props.deleteItem(_id)}}>
                            <DeleteForeverIcon />
                        </IconButton>
                    </div>
                </CardActions>                
            </Card>
        );
    }
}