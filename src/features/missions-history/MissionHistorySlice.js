import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const missionHistorySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // from the dispatch of createMission event
        addMissionToHistory: (state, action) => {
            state.push({ ...action.payload });
        },
        removePrepMission: (state, action) => {
            return [...state.filter(eachMission => eachMission.id !== action.payload)];
        }
    }
});

export const { addMissionToHistory, removePrepMission } = missionHistorySlice.actions;

export const fetchMissionHistory = (state) => state.history;

export default missionHistorySlice.reducer;