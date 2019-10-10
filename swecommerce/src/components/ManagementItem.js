import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditItemModal from './EditItemModal';
import currencyFormat from '../helpers/currency-format';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Box, Typography, Container, Grid } from '@material-ui/core';


const styles = theme => ({
    managementItem: {
        flexGrow: 1,
        height: 446,
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
        height: 48,
        marginBottom: 12,
    }
});

export default withStyles(styles) (class ManagementItem extends Component {    
    static propTypes = {
        item: PropTypes.object.isRequired,
        deleteItem: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }
    
    
    formatReal = (int) => {
        console.log('INT:',int)
        return currencyFormat.formatReal(int);
    }

    render() {
        const { classes } = this.props;
        const { itemName, itemPrice, _id } = this.props.item;
        
        return (
            <Box className={ classes.managementItem } border={1}>
                <Container fixed  className={ classes.image }>
                    
                </Container>
                <Container fixed>
                    <Typography className={ classes.title } align='center'>
                        { itemName }
                    </Typography>
                    <Typography noWrap className={ classes.price } align='center'>
                        {this.formatReal(itemPrice)}
                    </Typography>
                </Container>                
                <Grid container fixed className={ classes.actions }
                    align='center'>
                    <Grid item xs={6}>
                        <EditItemModal
                            id={ _id }/>
                    </Grid>
                    <Grid item xs={6}>
                    <IconButton onClick={() => {
                        this.props.deleteItem(_id)}}>
                        <DeleteForeverIcon />
                    </IconButton>
                    </Grid>
                </Grid>
            </Box>
        );
    }
})