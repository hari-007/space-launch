import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const launchMissionsSlice = createSlice({
    name: 'launchMissions',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // from the dispatch of createMission event
        scheduleMission: (state, action) => {
            state.push({ ...action.payload })
        },
        removeLaunchMission: (state, action) => {
            return [...state.filter(eachMission => eachMission.id !== action.payload)];
        }
    }
});

export const { scheduleMission, removeLaunchMission } = launchMissionsSlice.actions;

export const fetchLaunchMissionList = (state) => state.launchMissions;

export default launchMissionsSlice.reducer;