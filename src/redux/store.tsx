import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/AuthReducer';
import partyReducer from './reducers/PartyReducer';

export const store = configureStore({
    reducer: {
        userAuth: authReducer,
        partyReducer: partyReducer,
    },
})