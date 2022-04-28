import React, { useState, useEffect } from 'react';
import Orgs from '../components/home/orgs';
import { Box }  from '@mui/material';

/*
const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/" {...props} />
));
*/

export default function Home() {
    const [self, setSelf] = useState(null);
    
    function getSelf() {
        fetch('http://localhost:3000/api/users/self')
            .then((res) => res.json())
            .then((data) => {setSelf(data)})
            .catch((error) => {
                console.log({status: 'error', error: 'fetch error'});
            });
    }
    useEffect(() => {
        getSelf();
    }, []);

    // if self.status=='error', load login page
    // if self.status=='success', load orgs
    let page = (
        <div>
            <Box sx={{ typography: 'body1' }}>
                <p>Not logged in</p>
                {/*<Link component={RouterLink} to="/teambase">Go to your teambase</Link>*/}
            </Box>
        </div>
    );

    if(self != null && self.status == 'success') {
        // process orgs into div
        // process admin into div
        let greeting = (
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{
                    height: '50px',
                    width: '50px',
                    backgroundColor: '#EFEFEF',
                    borderRadius: '50%',
                    marginTop: '20px',
                    marginLeft: '17px',
                    marginRight: '15px'
                }}></div>
                <p>Hi {self.displayName}, here are your teams:</p>
            </div>
        )
        page = (
            <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '70px'
                    }}
            >
                {greeting}
                {Orgs(self.orgs)}
            </div>
        );
    }
    return page;
}
