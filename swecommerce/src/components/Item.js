import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddCartItem from './AddCartItem';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Box, Typography, Container } from '@material-ui/core';

const styles = theme => ({
    Item: {
        flexGrow: 1,
        height: 477,
        width: 276,
        backgroundColor: 'white',
        borderColor: '#E0E0E0'
    },
    image:{
        backgroundColor: '#D8D8D8',
        height: 252,
        width: 252,
        marginTop: 12,
    },
    add: {
        textAlign: 'center',
    },
    title: {
        height: 75,
        marginTop: 12,
        fontSize: 15,
        fontWeight: 700,
        color: "#777777",
        wordWrap: 'break-word'
    },
    price: {
        height: 40,
        fontSize: 20,
        fontWeight: 700,
    },
    actions: {
        marginBottom: 12,
    }
});

export default withStyles(styles) (class Item extends Component {    
    static propTypes = {
        item: PropTypes.object.isRequired,
        deleteItem: PropTypes.func.isRequired
    }

    render() {
        const { classes } = this.props;
        const { itemName, itemPrice, _id } = this.props.item;
        
        return (
            <Box className={ classes.Item } border={1}>
                <Container fixed  className={ classes.image } borderRadius="50%">
                    
                </Container>
                <Container fixed>
                    <Typography className={ classes.title } align='center'>
                        { itemName }
                    </Typography>
                    <Typography noWrap className={ classes.price } align='center'>
                        { <span>R${itemPrice}</span> }
                    </Typography>
                </Container>
                <Container fixed  className={ classes.add }>
                    <AddCartItem
                        item={ this.props.item }/>
                </Container>
                <Container fixed className={ classes.actions }
                    align='center'>
                    <Link to={ "/edit/"+_id }>
                        <IconButton dense="dense">
                            <EditIcon/>
                        </IconButton>
                    </Link>
                    <IconButton dense="dense" onClick={() => {
                        this.props.deleteItem(_id)}}>
                        <DeleteForeverIcon />
                    </IconButton>
                </Container>
            </Box>
        );
    }
})