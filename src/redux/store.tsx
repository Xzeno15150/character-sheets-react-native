import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/AuthReducer';
import partyReducer from './reducers/PartyReducer';
import charaReducer from './reducers/CharacterReducer';

export const store = configureStore({
    reducer: {
        userAuth: authReducer,
        partyReducer: partyReducer,
        characterReducer : charaReducer,
    },
})