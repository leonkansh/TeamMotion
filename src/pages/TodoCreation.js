import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import BottomNavBar from '../components/nav/BottomNavbar';

// TODO: get assignment list : names & due dates
// TODO: get team member list : names
const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

export default function TodoCreation() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="home"
                sx={{ mr: 2, color: "primary.main", left: 22, top: 23 }}
                onClick={goBack}
            >
                <ArrowBackIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <Stack
                component="form"
                sx={{
                    '& .MuiTextField-root': { mt: 5, width: '25ch' },
                    pl: 5,
                    pt: 3,
                }}
                noValidate
                autoComplete="off"
            >
                <Input placeholder="To-Do Name" sx={{ mt: 5, color: "purple", fontSize: 24, maxWidth: 300 }} />

                <Input placeholder="Add description..." sx={{ mt: 5, mr: 4 }} multiline />

                <TextField
                    id="outlined-select-currency"
                    select
                    label="Assignments"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select an assignment"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}> {/* assignment object */}
                            {option.label}
                            {/* assignment name */}
                        </MenuItem>
                    ))}
                </TextField>
                {/* <br /> */}
                <TextField
                    id="datetime-local"
                    label="Done by"
                    type="datetime-local"
                    // defaultValue={TODO:now}
                    sx={{ minWidth: 250 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Assignee"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select an assignment"
                    sx={{ mb: 15 }}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}> {/* assignment object */}
                            {option.label}
                            {/* assignment name */}
                        </MenuItem>
                    ))}
                </TextField>
            </Stack>
            <Button variant="contained" sx={{ position: "relative", bottom: 80, left: 230 }}>Add To-do</Button>
            <BottomNavBar />
        </div>
    );
}