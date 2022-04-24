import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function TodoItem({ todo, handleStatus, handleDelete }) {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const list = () => (
        <Box
            sx={{ width: 'auto' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {/* TODO: implement 3 actions */}
                {['Assign', 'Edit', 'Delete'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem button key="cancel">
                    <ListItemText primary="Cancel" />
                </ListItem>
            </List>
        </Box>
    );

    const convertUTC = (input_date) => {
        var options = { weekday: 'long', month: 'short', day: 'numeric' };
        var date = new Date(input_date);
        return date.toLocaleDateString("en-US", options);
    }

    const displayDate = (input) => {
        if (!input) return;
        return `Done by ${convertUTC(input)}`;
    }

    const displayUser = (input) => {
        if (!input) return;
        return input;
    }

    return (
        <Card
            sx={{
                minWidth: 275
            }}>
            <Grid container>

                <Grid item>
                    <CardActions>
                        <Checkbox
                            tabIndex={-1}
                            disableRipple
                            onChange={e => { handleStatus(todo) }}
                        />
                        {/* TODO: update assignment context */}
                    </CardActions>
                </Grid>

                <Grid item>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {todo.content}
                        </Typography>
                        <Typography variant="h7" component="div">
                            {displayDate(todo.date)}
                        </Typography>
                        <Typography variant="h7" component="div">
                            {displayUser(todo.userid.name)}
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item sx={{ position: 'absolute', right: 10 }}>
                    <IconButton color='error' onClick={e => handleDelete(todo)}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>

            </Grid>
        </Card>
    );
}
