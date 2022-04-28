import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Orgs from '../components/home/orgs';

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/" {...props} />
));

export default function Home() {
    const [self, setSelf] = useState(null);
    const [targetOrg, setTargetOrg] = useState(null);
    const [targetTeamId, setTargetTeamid] = useState(-1);
    
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
            Home page: Choose your team
            <Box sx={{ typography: 'body1' }}>
                <Link component={RouterLink} to="/teambase">Go to your teambase</Link>
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
                <Box sx={{ typography: 'body1' }}>
                    <Link component={RouterLink} to={{ pathname:"/summary",
                    state: {orgid:targetOrg, teamid:targetTeamId, userid:self._id }}}
                >Go to your teambase</Link>
                </Box>
            </div>
        );
    }
    return page;
}
