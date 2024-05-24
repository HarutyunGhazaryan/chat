import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeUserData: {},
};

const userSlice = createSlice({
    name: 'activeUserData',
    initialState,
    reducers: {
        changeActiveUserData(state, action) {
            const { userId, activeUser, groupedMessages } = action.payload;
            const filteredMessages = {};

            for (const date in groupedMessages) {
                filteredMessages[date] = groupedMessages[date].filter(
                    (message) => message.uId === userId,
                );
            }
            state.activeUserData = {
                id: userId,
                name: activeUser.name,
                message: filteredMessages,
            };
        },

        addMessage(state, action) {
            const { date, ...newMessage } = action.payload;

            if (state.activeUserData.message) {
                if (!state.activeUserData.message[date]) {
                    state.activeUserData.message[date] = [newMessage];
                } else {
                    state.activeUserData.message[date].push(newMessage);
                }
            }
        },
    },
});

export const { changeActiveUserData, addMessage } = userSlice.actions;

export default userSlice.reducer;
