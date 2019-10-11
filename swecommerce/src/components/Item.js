import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddCartItem from './AddCartItem';
import currencyFormat from '../helpers/currency-format-helper';
import { withStyles } from '@material-ui/core/styles';
import { Box, Typography, Container } from '@material-ui/core';

const styles = theme => ({
    Item: {
        flexGrow: 1,
        height: 435,
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
        marginBottom: 12,
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
    }
});

export default withStyles(styles) (class Item extends Component {    
    static propTypes = {
        item: PropTypes.object.isRequired
    }

    render() {
        const { classes } = this.props;
        const { itemName, itemPrice } = this.props.item;
        
        return (
            <Box className={ classes.Item } border={1}>
                <Container fixed  className={ classes.image }>
                    
                </Container>
                <Container fixed>
                    <Typography className={ classes.title } align='center'>
                        { itemName }
                    </Typography>
                    <Typography noWrap className={ classes.price } align='center'>
                        {currencyFormat.formatReal(itemPrice)}
                    </Typography>
                </Container>
                <Container fixed  className={ classes.add }>
                    <AddCartItem
                        item={ this.props.item }/>
                </Container>                
            </Box>
        );
    }
})