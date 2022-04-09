import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Drawer, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// export default function TodoItem({ todo, handleStatus }) {
export default function TodoItem({ todo }) {

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
                        // TODO: call set function
                        // onChange={e => { handleStatus(todo) }}
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
                            date: {todo.date}
                        </Typography>
                        <Typography variant="h7" component="div">
                            assignee: {todo.userid.name}
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item sx={{ position: 'absolute', right: 10 }}>
                    <CardActions>
                        {<React.Fragment key='bottom-drawer-frag'>
                            <MoreVertIcon onClick={toggleDrawer(true)} />
                            <Drawer
                                anchor='bottom'
                                open={state}
                                onClose={toggleDrawer(false)}
                            >
                                {list()}
                            </Drawer>
                        </React.Fragment>}
                    </CardActions>
                </Grid>

            </Grid>
        </Card>
    );
}
