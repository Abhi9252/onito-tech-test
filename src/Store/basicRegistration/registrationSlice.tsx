import { createSlice } from '@reduxjs/toolkit';

interface basicRegistrationState {
    value: number;
}

const initialState: basicRegistrationState = {
    value: 0,
};

const registrationSlice = createSlice({
    name: 'BASIC_REGISTRATION',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = registrationSlice.actions;

export default registrationSlice.reducer;
