import {describe, expect, jest, test} from "@jest/globals";
import {configureStore} from "@reduxjs/toolkit";
import characterTestReducer from "./CharacterTestReducer";
import {Provider} from "react-redux";

jest.useFakeTimers();

const store =  configureStore({
    reducer: {
        appReducer: characterTestReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

// @ts-ignore
const Wrapper = ({children}) => (<Provider store={store}>{children}</Provider>);

describe('<CharacterList />', ()=>{
    test('Assert initial state', ()=>{
        const expectedCharacters = store.getState().appReducer.characters;
        const expectedCount = expectedCharacters.length;
        expect(store.getState().appReducer.characters.length).toEqual(expectedCount);
    });
});