import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, IconButton } from '@mui/material';
import { Home, Work, Assignment, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/projects">
                    <ListItemIcon><Work /></ListItemIcon>
                    <ListItemText primary="Projects" />
                </ListItem>
                <ListItem button component={Link} to="/tasks">
                    <ListItemIcon><Assignment /></ListItemIcon>
                    <ListItemText primary="Tasks" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' } }}
            >
                <Menu />
            </IconButton>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
