import React from 'react';
import { CreateMission } from '../features/create-mission/CreateMission';
import { PrepareMissions } from '../features/prepare-missions/PrepareMissions';
import './App.css';

function App() {
  return (
    <main>
      <div> <CreateMission /> </div>

      <div className={'section-divider'}></div>
      
      <div> <PrepareMissions /> </div>
    </main>
  );
}

export default App;
