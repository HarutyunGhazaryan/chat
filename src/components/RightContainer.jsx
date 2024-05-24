import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef, useCallback } from 'react';

import styles from '../styles/RightContainer.module.css';

import { BsEmojiSmile } from 'react-icons/bs';
import Emoji from './Emoji';
import { handleEnterHelper } from '../helpers/handleEnterHelper';

const RightContainer = ({ addUserMessage }) => {
    const [messageInput, setMessageInput] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const messagesEndRef = useRef(null);

    const activeUserData = useSelector((state) => state.activeUserData);
    const activeUser = activeUserData.activeUserData;
    const dispatch = useDispatch();

    useEffect(() => {
        scrollToBottom();
    }, [activeUser.message]);

    const handleEnter = useCallback(
        (e) => {
            handleEnterHelper(
                e,
                messageInput,
                activeUser,
                setMessageInput,
                dispatch,
                addUserMessage,
            );
        },
        [messageInput, activeUser, dispatch, addUserMessage],
    );

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div
            className={`${styles.rightContainer} ${
                showEmoji ? styles.emojiOpen : ''
            }`}
        >
            <header className={styles.header}>
                <p>{activeUser.name}</p>
            </header>
            <main
                className={`${styles.main} ${
                    showEmoji ? styles.mainEmojiOpen : ''
                }`}
            >
                {activeUser.message &&
                    Object.keys(activeUser.message).map(
                        (date) =>
                            activeUser.message[date].length > 0 && (
                                <div key={date}>
                                    <h2 className={styles.date}>{date}</h2>
                                    {activeUser.message[date].map(
                                        (message, index) => (
                                            <div
                                                key={index}
                                                className={styles.message}
                                            >
                                                <p>{message.text}</p>
                                                <span className={styles.time}>
                                                    {message.time}
                                                </span>
                                            </div>
                                        ),
                                    )}
                                </div>
                            ),
                    )}
                <div ref={messagesEndRef} />
            </main>
            {showEmoji && <Emoji setMessageInput={setMessageInput} />}
            <footer className={styles.footer}>
                {Object.keys(activeUser).length ? (
                    <div className={styles.footerContent}>
                        <button
                            className={styles.attachFile}
                            onClick={() => setShowEmoji(!showEmoji)}
                        >
                            <BsEmojiSmile className={styles.smileIcon} />
                        </button>
                        <input
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            onKeyDown={handleEnter}
                            placeholder='Write a message...'
                            className={styles.inputMessage}
                        />
                    </div>
                ) : (
                    <div className={styles.footerContent}></div>
                )}
            </footer>
        </div>
    );
};

export default RightContainer;
