import { configureStore } from '@reduxjs/toolkit';
import createMissionReducer from '../features/create-mission/createMissionSlice';
import prepareMissionsReducer from '../features/prepare-missions/prepareMissionsSlice';
import launchMissionsReducer from '../features/launch-missions/launchMissionSlice';
import missionHistoryReducer from '../features/missions-history/MissionHistorySlice';

export const store = configureStore({
  reducer: {
    mission: createMissionReducer,
    prepareMissions: prepareMissionsReducer,
    launchMissions: launchMissionsReducer,
    history: missionHistoryReducer
  },
});
