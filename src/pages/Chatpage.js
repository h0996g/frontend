import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Chatpage = () => {
    const [chats, setChats] = useState([]);
    const fetchChat = async () => {
        const { data } = await axios.get('/api/chat');
        setChats(data);
    }
    useEffect(() => {
        fetchChat();
    }, []);
    return (
        <div >

            {chats.map(chat => (
                <div key={chat._id} >
                    <h2>{chat.chatName}</h2>

                </div>
            ))
            }
        </div>
    )
}

export default Chatpage
