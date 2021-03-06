import React from 'react';
import { CreateMission } from '../features/create-mission/CreateMission';
import { PrepareMissionsList } from '../features/prepare-missions/PrepareMissionList';
import { LaunchMissionList } from '../features/launch-missions/LaunchMissionList';
import { MissionHistoryParent } from '../features/missions-history/MissionHistoryParent';
import './App.css';

function App() {
  return (
    <main>
      <div> <CreateMission /> </div>

      {/* <div className={'section-divider'}></div> */}
      
      <div> <PrepareMissionsList /> </div>
      <div> <LaunchMissionList /> </div>
      <div> <MissionHistoryParent /> </div>
    </main>
  );
}

export default App;
