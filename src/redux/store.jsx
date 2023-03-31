import rootReducer from "./reducers/rootReducer";
import { configureStore } from '@reduxjs/toolkit'

// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger'

const middleware = __DEV__ ? [logger] : [];

const store = configureStore({
    reducer: rootReducer,
    devTools: __DEV__,
})
export default store;
