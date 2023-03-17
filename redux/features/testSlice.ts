import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // your initial state here
  test : 'test'
};

const testSlice = createSlice({
  name: 'TestSlice',
  initialState,
  reducers: {
    // your reducer functions here

    updateState: (state, action) => {
        state.test = action.payload;
        }
        
  },
});
export const { updateState } =
testSlice.actions;

export default testSlice.reducer;
