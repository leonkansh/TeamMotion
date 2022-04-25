import React, { useEffect, useState } from 'react';
import HeaderBar from '../components/nav/HeaderBar';
import BottomNavBar from '../components/nav/BottomNavbar';
import Messages from '../components/chat/messages';
import TextBox from '../components/chat/textbox'

let orgid = '6263d2fb17033b23e05c0401'
let teamid = '1'

/*
    Styling Reference:
    https://codesandbox.io/s/material-ui-chat-drh4l
*/

export default function Chats() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [msgData, setMsgData] = useState([]);

    const loadMsgs = () => {
        fetch(`http://localhost:3000/api/msg/${orgid}/${teamid}`)
            .then(res => res.json())
            .then(data => setMsgData(data))
            .catch(error => console.log('error'));
    }

    const sendMsg = async (text) => {
        if(text.length != 0) {
            console.log(`FETCH POST: ${text}`);
            await fetch(`http://localhost:3000/api/msg/${orgid}/${teamid}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    date: Date.now(),
                    content: text,
                    flag: 0
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.status == 'success') {
                    loadMsgs()
                } else {
                    console.log('Message could not be sent');
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
    useEffect(() => {
        loadMsgs()
    }, [])

    console.log(msgData)

    return (
        <div>
            <HeaderBar screenname={'Chat'}/>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    position: 'relative'
                }}>
                    <Messages msgData={msgData} />
                    <TextBox sendMsg={sendMsg} />
                </div>
            </div>
            <BottomNavBar />
        </div>
    );
}