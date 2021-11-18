import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const prepareMissionsSlice = createSlice({
    name: 'prepareMissions',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // from the dispatch of createMission event
        addMission: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addMission } = prepareMissionsSlice.actions;

export default prepareMissionsSlice.reducer;