import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import missionReducer from '../features/create-mission/createMissionSlice';
import prepareMissionsReducer from '../features/prepare-missions/prepareMissionsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mission: missionReducer,
    prepareMissions: prepareMissionsReducer
  },
});
