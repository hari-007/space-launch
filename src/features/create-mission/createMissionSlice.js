import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    agency: '',
    type: '',
    flight: ''
};

export const createMissionSlice = createSlice({
    name: 'mission',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // from the dispatch of createMission event
        setMissionTitle: (state, action) => {
            return { ...state, title: action.payload }
        },
        setMissionAgency: (state, action) => {
            return { ...state, agency: action.payload }
        },
        setMissionType: (state, action) => {
            return { ...state, type: action.payload }
        },
        setMissionFlight: (state, action) => {
            return { ...state, flight: action.payload }
        }
    }
});

export const { setMissionTitle, setMissionAgency,
    setMissionType, setMissionFlight } = createMissionSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.mission)`
export const selectMission = (state) => state.mission;

export default createMissionSlice.reducer;