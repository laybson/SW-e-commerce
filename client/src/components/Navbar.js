import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { withStyles } from '@material-ui/core/styles';
import { 
    AppBar, 
    Toolbar,
    IconButton,
    Tooltip,} from '@material-ui/core';

const styles = theme => ({
    navbar: {
        flexGrow: 1,
        backgroundColor: 'rgba(195, 29, 58, .9)'
    },
    title: {
        display: 'block',
    },
    rightSection: {
        color: 'white',
        display: 'flex',
        
    },
    icon: {
        color: 'white',
    },
});


export default withStyles(styles) (class Navbar extends Component {
    
    render() {
        const { classes } = this.props;

        return (
            <div>
                <AppBar position="fixed"  className={ classes.navbar }>
                    <Toolbar>
                        <Link to="/">
                            <Tooltip title="Explorar Loja">
                                <Logo className={classes.title} fill="white" height="33" />
                            </Tooltip>
                        </Link>
                        <div className={classes.navbar} />
                        <div className={classes.rightSection}>
                            <Link to="/management">
                                <Tooltip title="Gerenciar Itens">
                                    <IconButton>
                                        <LibraryAddIcon className={ classes.icon } />                                    
                                    </IconButton>
                                </Tooltip>
                            </Link>
                            <Link to="/cart">
                                <Tooltip title="Meu Carrinho">
                                    <IconButton>
                                        <ShoppingCartIcon className={ classes.icon }/>
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
})