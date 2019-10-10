import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { Modal, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    createItemModal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),     
    },
    add: {
        top: -12,
        borderRadius: 100,
        minHeight: 30,
        padding: "0 1em",
        "&.MuiButton--large": {
            minHeight: 39
        },
        textTransform: "none",
        fontSize: 15,
        fontWeight: 700,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        '&:hover': {
          transform: 'scale(1.2)',
        },
    }
});

export default withStyles(styles) (class CreateItemModal extends Component {
    constructor(props) {
        super(props);

        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemPrice = this.onChangeItemPrice.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            itemName: '',
            itemPrice: 0,
            open: false
        }
    }

    componentDidMount() {
        this.setState({
            itemName: ''
        });
    }

    onChangeItemName(e) {
        this.setState({
            itemName: e.target.value
        });
    }

    onChangeItemPrice(e) {
        this.setState({
            itemPrice: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const item = {
            itemName: this.state.itemName,
            itemPrice: this.state.itemPrice,
        }

        console.log(item);

        axios.post('http://localhost:5000/items/add', item)
            .then(res => console.log(res.data));

        window.location = '/management';
    }

    handleOpen() {
        this.setState({ open: true });
    };
    
    handleClose(){
        this.setState({ open: false });
    };

    getModalStyle() {
        const top = 50;
        const left = 50;
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
    }

    render() {
        const { classes } = this.props;

        return (            
            <div>
                <Fab
                    variant="extended"
                    size="medium"
                    aria-label="add"
                    className={classes.add}
                    onClick={this.handleOpen}
                    >
                    <AddIcon />
                        Adicionar item
                </Fab>
                <Modal                    
                    open={this.state.open}
                    onClose={this.handleClose}>
                    <div style={this.getModalStyle()} className={ classes.createItemModal }>                    
                        <h4>Adicionar Novo Item</h4>
                        <form onSubmit={ this.onSubmit }>
                            <div className="form-group">
                                <label>Item Name: </label>
                                <input
                                    type="text"
                                    required
                                    className="form-control"
                                    value={ this.state.itemName }
                                    onChange={ this.onChangeItemName }/>                            
                            </div>
                            <div className="form-group">
                                <label>Item Price:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={ this.state.itemPrice }
                                    onChange={ this.onChangeItemPrice }/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="submit"
                                    value="Create Item"
                                    className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
})