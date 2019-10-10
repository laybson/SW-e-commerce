import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { withStyles } from '@material-ui/core/styles';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton} from '@material-ui/core';

const styles = theme => ({
    navbar: {
        flexGrow: 1,
        backgroundColor: '#C3293A',     
    },
    title: {
        display: 'block',
        color: 'white',
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
                <AppBar position="static"  className={ classes.navbar }>
                    <Toolbar>
                        <Link to="/">
                            <Typography className={ classes.title }  variant="h6" noWrap>
                                SW e-commerce
                            </Typography>                        
                        </Link>
                        <div className={classes.navbar} />
                        <div className={classes.rightSection}>
                            <Link to="/management">
                                <IconButton>
                                    <LibraryAddIcon className={ classes.icon } />                                    
                                </IconButton>
                            </Link>
                            <Link to="/cart">
                                <IconButton>
                                    <ShoppingCartIcon className={ classes.icon }/>
                                </IconButton>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
})