import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/" {...props} />
));

export default function AddButton(props) {
    return (
        <Fab
            aria-label="add"
            sx={{
                position: 'fixed',
                bottom: 75,
                right: 25,
                fontSize: 60,
                bgcolor: (props.isPurple) ? '#4B369D' : '#FFFFFF'
            }}
            component={RouterLink}
            to={props.path}
        >
            <AddIcon sx={{ color: `${(props.isPurple) ? '#FFFFFF' : '#4B369D'}` }} />
        </Fab>
    );
}