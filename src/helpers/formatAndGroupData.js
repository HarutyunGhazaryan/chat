export const formatDate = (date) => {
    const options = { day: 'numeric', month: 'short' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const groupMessagesByDateAndId = (messages, uId) => {
    const filteredMessages = messages.some((message) =>
        message.details.filter((detail) => detail.uId === uId),
    );

    const groupedMessages = {};
    if (filteredMessages) {
        messages.forEach((message) => {
            const { date, details } = message;
            details.forEach((detail) => {
                if (!groupedMessages[date]) {
                    groupedMessages[date] = [];
                }
                groupedMessages[date].push(detail);
            });
        });
        return groupedMessages;
    }
};
