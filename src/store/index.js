import { configureStore } from '@reduxjs/toolkit';
import activeUserDataReducer from './usersSlice';

export default configureStore({
    reducer: {
        activeUserData: activeUserDataReducer,
    },
});
