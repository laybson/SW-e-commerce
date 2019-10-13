import React, { Component } from 'react';
import ItemsList from '../components/ItemsList';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    itemsList: {        
    },
});

export default withStyles(styles) (class Items extends Component {        
    render() {
        const { classes } = this.props;

        return (
            <Container className={classes.itemsList}>
                <ItemsList />
            </Container>            
        );
    }
})