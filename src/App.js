import ContactList from './components/ContactList';
import RightContainer from './components/RightContainer';

import './App.css';
import { useState } from 'react';

function App() {
    const [users] = useState([
        { name: 'user-1', id: 'uId-1' },
        { name: 'user-2', id: 'uId-2' },
    ]);
    const [messages, setMessages] = useState([]);

    const handleAddMessage = (newMessage) => {
        const { id, uId, created_by, text, time, date } = newMessage;
        const existingMessageIndex = messages.findIndex(
            (message) => message.date === date,
        );

        if (existingMessageIndex !== -1) {
            const updateMessages = [...messages];
            updateMessages[existingMessageIndex].details.push({
                id: id,
                uId: uId,
                created_by: created_by,
                text: text,
                time: time,
            });
            setMessages(updateMessages);
        } else {
            const newMessage = {
                date: date,
                details: [
                    {
                        id: id,
                        uId: uId,
                        created_by: created_by,
                        text: text,
                        time: time,
                    },
                ],
            };
            const updateMessages = [...messages, newMessage];
            setMessages(updateMessages);
        }
    };

    return (
        <div className='App'>
            <ContactList users={users} messages={messages} />
            <RightContainer addUserMessage={handleAddMessage} />
        </div>
    );
}

export default App;
