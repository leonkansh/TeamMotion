import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';

/**
 * TODO: takes two props: screen name and team name
 * @returns headbar with a back arrow that returns to last page
 */
export default function HeaderBarBackArrow() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <Box>
            <AppBar position="static" sx={{ bgcolor: "white" }} elevation={0}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="go back to last page"
                        sx={{ mr: 2, color: "primary.main" }}
                        onClick={goBack}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            color: "primary.main"
                        }}
                    >
                        <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
                            Screen Name
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
