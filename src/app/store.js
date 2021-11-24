import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createMissionReducer from '../features/create-mission/createMissionSlice';
import prepareMissionsReducer from '../features/prepare-missions/prepareMissionsSlice';
import launchMissionsReducer from '../features/launch-missions/launchMissionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mission: createMissionReducer,
    prepareMissions: prepareMissionsReducer,
    launchMissions: launchMissionsReducer
  },
});
