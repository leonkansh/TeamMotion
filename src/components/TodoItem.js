import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function TodoItem({ todo }) {
    return (
        <Card key={todo.key}
            sx={{
                minWidth: 275
            }}>
            <Grid container>

                <Grid item md={1}>
                    <CardActions>
                        <Checkbox
                            tabIndex={-1}
                            disableRipple
                        />
                    </CardActions>
                </Grid>

                <Grid item md={1}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {todo.name}
                        </Typography>
                        <Typography variant="h7" component="div">
                            {todo.date}
                        </Typography>
                        <Typography variant="h7" component="div">
                            {todo.assignee}
                        </Typography>
                    </CardContent>
                </Grid>

                {/* FIXME: display 3dots in the same row as text above */}
                {/* TODO: use Drawer to list 3dots options */}
                <Grid container justifyContent="flex-end">
                    <CardActions>
                        <MoreVertIcon />
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    );
}
