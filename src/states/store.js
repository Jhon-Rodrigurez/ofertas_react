import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './sliceReducers';

const store= configureStore({
    reducer: rootReducer
});
console.log(store.getState().usuario);

export {store}