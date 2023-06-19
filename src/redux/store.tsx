import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/AuthReducer'
import partyReducer from './reducers/PartyReducer';
import characterReducer from "./reducers/CharacterReducer";

export const store = configureStore({
    reducer: {
        userAuth: authReducer,
        partyReducer: partyReducer,
        characterReducer : characterReducer,
    },
})