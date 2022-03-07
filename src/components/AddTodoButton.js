import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/" {...props} />
));

export default function AddTodoButton() {
    return (
        <Fab
            color="primary"
            aria-label="add"
            sx={{
                position: 'fixed',
                bottom: 75,
                right: 25,
                fontSize: 60
            }}
            component={RouterLink}
            to="/tasks/create-todo"
        >
            <AddIcon />
        </Fab>
    );
}