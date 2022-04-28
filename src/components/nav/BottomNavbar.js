import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { UsersThree, ChatCircle, Lightbulb, ListChecks } from "phosphor-react";
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        "& .MuiBottomNavigationAction-root": {
            "@media (max-width: 768px)": {
                minWidth: "auto",
                padding: "6px 0"
            }
        }
    }
});

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/" {...props} />
));

function linkScreenToPath(routeName) {
    routeName = routeName.split("/")[1];
    if ("teambase" === routeName) return 0;
    else if ("chats" === routeName) return 1;
    else if ("reflections" === routeName) return 2;
    else if ("tasks" === routeName) return 3;
    else return -1;
}

export default function FixedBottomNavigation(props) {
    const pathname = useLocation().pathname;
    const [value, setValue] = React.useState(linkScreenToPath(pathname));

    const ref = React.useRef(null);

    const classes = useStyles();

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    className={classes.root}
                >
                    <BottomNavigationAction icon={<UsersThree size={32} />} component={RouterLink} to="/teambase" />
                    <BottomNavigationAction icon={<ChatCircle size={32} />} component={RouterLink} to="/chats" />
                    <BottomNavigationAction icon={<Lightbulb size={32} />} component={RouterLink} to="/reflections" />
                    <BottomNavigationAction icon={<ListChecks size={32} />} component={RouterLink} to="/tasks" />
                </BottomNavigation>
            </Paper>
        </Box >
    );
}
