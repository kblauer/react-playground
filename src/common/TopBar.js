// Core
import React from 'react';
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';

// Material Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from "@material-ui/core/Drawer";


// Material Icons
import MenuIcon from '@material-ui/icons/Menu';

// Util classes
import TopBarUtil from "./TopBarUtil";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function TopBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        drawerOpen: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, drawerOpen: open});
    }

    const navListItems = TopBarUtil.getNavList();
    const navList = <List>
        {navListItems.map((navItem) => (
            <Link to={navItem.link} key={navItem.text}>
                <ListItem button key={navItem.text}>
                    <ListItemIcon key={navItem.text}>{navItem.icon}</ListItemIcon>
                    <ListItemText primary={navItem.text}/>
                </ListItem>
            </Link>
        ))}
    </List>

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Kyle's React Playground
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            {/* Material Drawer - contains navList */}
            <React.Fragment>
                <Drawer anchor="left" open={state.drawerOpen} onClose={toggleDrawer(false)}>
                    {navList}
                </Drawer>
            </React.Fragment>
        </div>
    );
}