import React, { Component } from 'react';
import axios from 'axios';
import currencyFormat from '../helpers/currency-format-helper';
import { withStyles } from '@material-ui/core/styles';
import { Modal, IconButton, Box, TextField, Button } from '@material-ui/core';
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
    edit: {
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
    },
    form: {
        textAlign: 'center'
    },
    iconEdit: {
        width: '70%',
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
            maskedPrice: "R$ 0,00",
            open: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/items/'+this.props.id)
            .then(response => {
                this.setState({
                    itemName: response.data.itemName,
                    itemPrice: response.data.itemPrice,
                    maskedPrice: currencyFormat.formatReal(response.data.itemPrice)
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
        let intPrice = currencyFormat.getMoney(e.target.value);
        let realPrice = currencyFormat.formatReal(intPrice);
        this.setState({
            itemPrice: intPrice,
            maskedPrice: realPrice
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
                        <form className={ classes.form }>
                            <h5>Editar Item</h5>
                            <TextField
                                required
                                value={ this.state.itemName }
                                label="Nome"
                                margin="normal"
                                onChange={ this.onChangeItemName }
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                required
                                value={ this.state.maskedPrice }
                                label="Preço"
                                margin="normal"
                                onChange={ this.onChangeItemPrice }
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <div>
                                <Button variant="outlined"  className={ classes.edit }
                                    onClick={ this.onSubmit }>
                                    <span><EditIcon className={ classes.iconEdit } /> </span> Editar Item
                                </Button>
                            </div>  
                        </form>
                    </div>
                </Modal>
            </Box>
        );
    }
})