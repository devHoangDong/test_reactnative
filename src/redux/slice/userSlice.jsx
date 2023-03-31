import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export const selectUser = (state) => state?.userData?.user;

export default userSlice.reducer;
