import { useState } from 'react';
import styles from '../styles/SearchContact.module.css';
import { IoIosSearch } from 'react-icons/io';

const SearchContact = ({ searchName }) => {
    const [name, setName] = useState('');

    return (
        <div className={styles.search}>
            <label className={styles.searchBar}>
                <IoIosSearch className={styles.searchIcon} />
                <input
                    className={styles.searchInput}
                    type='text'
                    placeholder='search...'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        searchName(e.target.value);
                    }}
                />
            </label>
        </div>
    );
};

export default SearchContact;
