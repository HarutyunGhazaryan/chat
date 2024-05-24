import { useState } from 'react';
import SearchContact from './SearchContact';
import { renderUsers, searchNameInput } from '../helpers/contactHelper';

import styles from '../styles/ContactList.module.css';
import { groupMessagesByDateAndId } from '../helpers/formatAndGroupData';
import { useDispatch } from 'react-redux';
import { changeActiveUserData } from '../store/usersSlice';

const ContactList = ({ users, messages }) => {
    const [searchResults, setSearchResult] = useState([]);
    const [inputName, setInputName] = useState('');
    const [activeUserId, setActiveUserId] = useState(null);

    const dispatch = useDispatch();

    const searchName = (inputName) => {
        setInputName(inputName);
        setSearchResult(searchNameInput(inputName, users));
    };
    const handleUserItemClick = (userId) => {
        setActiveUserId(userId);
        const groupedMessages = groupMessagesByDateAndId(messages, userId);
        const activeUser = users.find((user) => user.id === userId);
        dispatch(changeActiveUserData({ groupedMessages, activeUser, userId }));
    };

    return (
        <div className={styles.listContainer}>
            <SearchContact searchName={searchName} />
            {renderUsers(
                searchResults,
                users,
                inputName,
                activeUserId,
                handleUserItemClick,
                messages,
            )}
        </div>
    );
};

export default ContactList;
