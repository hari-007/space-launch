import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import missionReducer from '../features/create-mission/createMissionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mission: missionReducer
  },
});
