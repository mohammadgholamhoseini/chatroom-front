import * as React from 'react';
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {routesItem} from "../../routes/RoutesConfig";
import {useNavigate} from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(6)} + 20px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(7)} + 20px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme}) => ({
    zIndex: theme.zIndex.drawer
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const navigate = useNavigate();
    const theme = useTheme();
    console.log(routesItem)
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navigation =(path)=>{
        console.log(path)
        navigate(path);
    }

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open} elevation={0} sx={{backgroundColor: '#ffff', borderBottom: 0.5,borderColor:"#EFEFEF"}}>
                <Toolbar dir='rtl' sx={open ? {marginLeft: "250px"} : {marginLeft: "70px"}}>
                    {open === false ? <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon/>
                    </IconButton> : <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerClose}
                        edge="start"
                    >
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>}
                    <Typography sx={{color: "black"}} variant="h6" noWrap component="div">
                        Mini variant drawer
                    </Typography>

                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" sx={{border:null}} open={open}>
                <DrawerHeader>
                    <Typography>واژه</Typography>
                </DrawerHeader>
                <List sx={{ height:'100vh'}} dir="rtl">
                    {routesItem.map((item, index) => (
                        item.title!==""?
                        <ListItem onClick={()=>navigation(item.path)} key={item} disablePadding sx={{
                                      display: 'block'
                                  }} >
                            <ListItemButton sx={{height:"64px"}}>
                                <ListItemIcon sx={{marginLeft:"10px"}}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} sx={{opacity: open ? 1 : 0}}/>
                            </ListItemButton>
                        </ListItem>
                            :
                            ""
                    ))}
                </List>
            </Drawer>

        </Box>
    );
}
