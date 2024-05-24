import { formatDate, formatTime } from './formatAndGroupData';
import { addMessage } from '../store/usersSlice';

export const handleEnterHelper = (
    e,
    messageInput,
    activeUser,
    setMessageInput,
    dispatch,
    addUserMessage,
) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (messageInput.trim() === '') return;

        const newMessage = {
            id: 'mId' + Math.random(),
            uId: activeUser.id,
            created_by: 'user_id',
            text: messageInput,
            time: formatTime(),
            date: formatDate(),
        };

        setMessageInput('');
        dispatch(addMessage(newMessage));
        addUserMessage(newMessage);
    }
};
