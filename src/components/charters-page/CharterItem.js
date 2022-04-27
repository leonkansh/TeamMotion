import React from 'react';
import Box from '@mui/material/Box';
import Picker from 'emoji-picker-react';
import Popper from '@mui/material/Popper';

export default function CharterItem({ item }) {
    const [chosenEmoji, setChosenEmoji] = React.useState(item.reactions);

    const postEmoji = async (emoji) => {
        const reaction = { emoji: emoji, postid: item._id };
        fetch("http://localhost:3000/api/board/6263d2fb17033b23e05c0401/1/react", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reaction)
        })
        .then(res => res.json())
        .then(receivedData => {
            setChosenEmoji(receivedData);
        }).catch(e => console.log("error:", e));
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const onEmojiClick = async (event, emojiObject) => {
        setAnchorEl(null);
        await postEmoji(emojiObject.emoji);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

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
                {chosenEmoji.length > 0 && (
                    <span>
                        {chosenEmoji.map(post => {
                            if (post) return (` ${post.emoji} ${post.users.length}`)
                        })}
                    </span>
                )}
            </Box>
        </div>
    );
}