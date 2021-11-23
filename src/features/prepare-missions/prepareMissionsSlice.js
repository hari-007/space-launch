import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const prepareMissionsSlice = createSlice({
    name: 'prepareMissions',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // from the dispatch of createMission event
        addMission: (state, action) => {
            state.push({ 
                id: Date.now(), // Adds unique Id to every mission 
                ...action.payload
            });
        }
        // removeMission: (state, action) => {
        //     return state.filter(eachMission => eachMission.id !== action.payload);
        // }
    }
});

export const { addMission } = prepareMissionsSlice.actions;

export const fetchPreparedMissionList = (state) => state.prepareMissions;

export default prepareMissionsSlice.reducer;