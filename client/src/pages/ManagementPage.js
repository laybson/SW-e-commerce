import React, { Component } from 'react';
import ManagementItem from '../components/ManagementItem';
import CreateItemModal from '../components/CreateItemModal';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    management: {
        marginTop: 64,
    },
    grid: {
        flexGrow: 1,
    }
});

export default withStyles(styles) (class Management extends Component {        
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            items: [],
            addModalOpen: false,
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

    itemsList() {
        return this.state.items.map((currentItem, i) => (
            <Grid key={i}>
              <ManagementItem 
                item={ currentItem }
                deleteItem={ this.deleteItem }
                key={ currentItem._id }/>
            </Grid>
        ))
    }

    render() {
        const { classes } = this.props; 

        return (
            <div className={ classes.management }>
                <CreateItemModal />                             
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