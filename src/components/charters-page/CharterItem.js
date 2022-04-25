import React from 'react';
import Box from '@mui/material/Box';
import Picker from 'emoji-picker-react';
import Popper from '@mui/material/Popper';

// title: fontcolor varies when `charters` or `charter templates`
// content: line breaks, calendar view, placeholder

export default function CharterItem({ item }) {
    const [chosenEmoji, setChosenEmoji] = React.useState([]);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const onEmojiClick = (event, emojiObject) => {
        const list = chosenEmoji;
        list.push(emojiObject)
        setChosenEmoji(list);
        setAnchorEl(null);
        /** TODO: post API with new emoji list */
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    console.log(chosenEmoji);

    return (
        <div>
            <Box
                sx={{
                    bgcolor: 'white',
                    borderRadius: 8,
                    minWidth: 'auto',
                    minHeight: 196,
                    pt: 0.5,
                    pl: 4,
                    pr: 4,
                    pb: 0.5,
                    mb: 2
                }}
            >
                <h2>{item.title || item.name}</h2>
                <p>{item.content}</p>
                <button aria-describedby={id} type="button" onClick={handleClick}>
                    React
                </button>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Picker onEmojiClick={onEmojiClick} />
                </Popper>
                {chosenEmoji.length > 0 ? (
                    <span>You chose: {chosenEmoji.map(item => item.emoji)}</span>
                ) : (
                    <span>No emoji chosen</span>
                )}
            </Box>
        </div>
    );
}