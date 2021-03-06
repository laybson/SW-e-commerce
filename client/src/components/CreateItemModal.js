import React, { Component } from 'react';
import axios from 'axios';
import currencyFormat from '../helpers/currency-format-helper';
import { withStyles } from '@material-ui/core/styles';
import { Modal, Fab, TextField, Button, Typography } from '@material-ui/core';
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
        bottom: 'auto',
        left: 25,
        top: 84,
        right: 'auto',
        position: 'fixed',
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
    create: {
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
    iconAdd: {
        height: 20,
        width: 20,       
    },
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
            maskedPrice: "R$ 0,00",
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

        console.log(item);

        axios.post('/items/add', item)
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
                        
                        <form className={classes.form}>
                            <Typography variant="h6" gutterBottom>
                                Adicionar Novo Item
                            </Typography>
                            <div>
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
                            </div>
                            <div>
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
                            </div>
                            <div>
                                <Button variant="outlined"  className={ classes.create }
                                    onClick={ this.onSubmit }>
                                    <span><AddIcon className={ classes.iconAdd } /> </span> Criar Item
                                </Button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
})