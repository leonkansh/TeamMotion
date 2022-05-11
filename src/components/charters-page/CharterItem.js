import React from 'react';
import Picker from 'emoji-picker-react';
import Popper from '@mui/material/Popper';
import { useParams } from "react-router-dom";
import {ReactComponent as AddEmoji} from '../../assets/add_reaction.svg';
import './CharterItem.css';

export default function CharterItem({ item }) {
    const { orgid, teamid } = useParams();
    const [chosenEmoji, setChosenEmoji] = React.useState(item.reactions);

    const postEmoji = async (emoji) => {
        const reaction = { emoji: emoji, postid: item._id };
        await fetch(`https://tadashi-srv.herokuapp.com/api/board/${orgid}/${teamid}/react`, {
            credentials: 'include',
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
            <div className='post-card'>
                <h2 className='post-title'>{item.title || item.name}</h2>
                <p className='post-content'>{item.content}</p>
                <div className='reaction-container'>
                    {chosenEmoji.length > 0 && (
                        <span className='row-emoji'>
                            {chosenEmoji.map((post, index) => {
                                if (post) {
                                    return (
                                        <button
                                            className='btn-emoji'
                                            key={`emoji ${index}`}
                                            value={post.emoji}
                                            onClick={async (e) => postEmoji(e.target.value)}
                                        >
                                            {post.emoji} {post.users.length}
                                        </button>
                                    )
                                }
                            })}
                        </span>
                    )}
                    <button className='btn-add-emoji' aria-describedby={id} type="button" onClick={handleClick}>
                        <AddEmoji />
                    </button>
                </div>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Picker onEmojiClick={onEmojiClick} />
                </Popper>
            </div>
        </div>
    );
}