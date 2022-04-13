import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link as RouterLink } from 'react-router-dom';

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/" {...props} />
));

export default function HeaderBar({ screenname }) {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    {/* FIXME: center align screen name from homebtn to rightest */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="home"
                        sx={{ mr: 2 }}
                        component={RouterLink}
                        to="/"
                    >
                        <HomeOutlinedIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
                            {screenname}
                        </Typography>
                        <Typography variant="h8" component="p" sx={{ flexGrow: 1 }}>
                            Team Name
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
