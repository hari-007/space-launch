import React from 'react';
import { CreateMission } from '../features/create-mission/CreateMission';
import { PrepareMissionsList } from '../features/prepare-missions/PrepareMissionList';
import { LaunchMissionsList } from '../features/launch/LaunchMissionList';
import './App.css';

function App() {
  return (
    <main>
      <div> <CreateMission /> </div>

      {/* <div className={'section-divider'}></div> */}
      
      <div> <PrepareMissionsList /> </div>
      <div> <LaunchMissionsList /> </div>
    </main>
  );
}

export default App;
