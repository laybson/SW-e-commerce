import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { Modal, IconButton, Box } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
    editItemModal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),     
    },
    iconDiv: {
        height: 48,
        width: 48,
    },
});

export default withStyles(styles) (class EditItemModal extends Component {
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
        axios.get('http://localhost:5000/items/'+this.props.id)
            .then(response => {
                this.setState({
                    itemName: response.data.itemName,
                    itemPrice: response.data.itemPrice
                })
            })
            .catch(error => {
                console.log(error);
            })
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

        axios.post('http://localhost:5000/items/update/'+this.props.id, item)
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
            <Box className={ classes.iconDiv }>
                <IconButton dense="dense"
                    onClick={this.handleOpen}>
                    <EditIcon/>
                </IconButton>                
                <Modal                    
                    open={this.state.open}
                    onClose={this.handleClose}>
                    <div style={this.getModalStyle()} className={ classes.editItemModal }>                    
                        <h4>Editar Item</h4>
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
                                    value="Edit Item"
                                    className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                </Modal>
            </Box>
        );
    }
})