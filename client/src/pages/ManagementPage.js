import React, { Component } from 'react';
import ManagementList from '../components/ManagementList';
import CreateItemModal from '../components/CreateItemModal';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    management: {
    },
    modal: {        
    }
});

export default withStyles(styles) (class Management extends Component {        
    
    render() {
        const { classes } = this.props; 

        return (
            <div>
                <CreateItemModal  className={ classes.modal } />
                <Container className={ classes.management }>
                    <ManagementList />                
                </Container>
            </div>
        );
    }
})