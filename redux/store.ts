import { combineReducers, configureStore } from '@reduxjs/toolkit';
import testSlice from './features/testSlice';



const rootReducer = combineReducers({
    // your reducers here
    testSlice: testSlice,
    });


const store = configureStore({
  reducer: rootReducer,
});

export default store;