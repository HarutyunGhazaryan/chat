import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

import styles from '../styles/Emoji.module.css';

const Emoji = ({ setMessageInput }) => {
    const addEmoji = (e) => {
        if (e) {
            const sym = e.unified.split('-');
            const codeArray = sym.map((element) => parseInt(element, 16));
            const newEmoji = String.fromCodePoint(...codeArray);
            setMessageInput((prevInput) => prevInput + newEmoji);
        }
    };
    return (
        <div className={styles.emojiPicker}>
            <Picker data={data} onEmojiSelect={addEmoji} />
        </div>
    );
};

export default Emoji;
