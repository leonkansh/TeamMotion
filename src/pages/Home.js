import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/" {...props} />
));

export default function Home() {
    return (
        <div>
            Home page: Choose your team
            <Box sx={{ typography: 'body1' }}>
                <Link component={RouterLink} to="/teambase">Go to your teambase</Link>
            </Box>
        </div>
    )
}
