import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    agency: '',
    type: '',
    flight: ''
};

export const missionSlice = createSlice({
    name: 'mission',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // from the dispatch of createMission event
        createMission: (state, action) => {
            return action.payload
        },
        resetMission: (state) => {
            console.log('Reached -- Reset !!');
            state = { title: '', agency: '', type: '', flight: ''} 
        }
    }
});

export const { createMission, resetMission } = missionSlice.actions;

export default missionSlice.reducer;