import styles from '../styles/UserItem.module.css';

const UserItem = ({ name, id, active, onClick, message }) => {
    const handleClick = () => {
        onClick(id);
    };

    return (
        <div className='container' onClick={handleClick}>
            <div
                className={`${
                    active ? styles.userItemActive : styles.userItem
                }`}
            >
                <div className={styles.image}>
                    <span className={styles.nameLetter}>{name[0]}</span>
                </div>
                <div className={styles.userInfo}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.info}>
                        {message && message.length > 30
                            ? message.slice(0, 30) + '...'
                            : message}
                    </p>
                </div>
                <div className={`${active ? styles.active : ''}`}></div>
            </div>
        </div>
    );
};

export default UserItem;
