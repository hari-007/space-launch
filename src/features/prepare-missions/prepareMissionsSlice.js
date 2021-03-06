import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const prepareMissionsSlice = createSlice({
    name: 'prepareMissions',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // from the dispatch of createMission event
        addMissionToPrep: (state, action) => {
            state.push({ ...action.payload });
        },
        removePrepMission: (state, action) => {
            return [...state.filter(eachMission => eachMission.id !== action.payload)];
        }
    }
});

export const { addMissionToPrep, removePrepMission } = prepareMissionsSlice.actions;

export const fetchPreparedMissionList = (state) => state.prepareMissions;

export default prepareMissionsSlice.reducer;