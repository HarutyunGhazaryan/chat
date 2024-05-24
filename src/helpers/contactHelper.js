import UserItem from '../components/UserItem';

export const searchNameInput = (inputName, users) => {
    if (!inputName.trim()) {
        return users;
    }
    const result = users.filter((user) =>
        user.name.toLowerCase().includes(inputName.toLowerCase()),
    );
    return result;
};
export const renderUsers = (
    searchResult,
    users,
    inputName,
    activeUserId,
    handleUserItemClick,
    messages,
) => {
    const getLastMessage = (user) => {
        const userMessages = messages.filter((message) => {
            return message.details.some((detail) => detail.uId === user.id);
        });

        if (userMessages.length > 0) {
            const lastUserMessage = userMessages[
                userMessages.length - 1
            ].details
                .filter((detail) => detail.uId === user.id)
                .pop();
            return lastUserMessage.text;
        }

        return '';
    };

    if (inputName !== '' && searchResult.length === 0) {
        return <p style={{ textAlign: 'center' }}>Name not found!</p>;
    }

    if (searchResult.length === 0 || inputName === '') {
        return users.map((user) => (
            <UserItem
                key={user.id}
                name={user.name}
                message={getLastMessage(user)}
                id={user.id}
                active={activeUserId === user.id}
                onClick={handleUserItemClick}
            />
        ));
    } else {
        return searchResult.map((user) => (
            <UserItem
                key={user.id}
                name={user.name}
                message={getLastMessage(user)}
                id={user.id}
                active={activeUserId === user.id}
                onClick={handleUserItemClick}
            />
        ));
    }
};
