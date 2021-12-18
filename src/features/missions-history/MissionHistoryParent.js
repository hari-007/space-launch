import React from 'react';
import { useSelector } from 'react-redux';
import { fetchMissionHistory } from './MissionHistorySlice';
import { MissionHistory } from './MissionHistory';

export function MissionHistoryParent() {

  console.log('Render -- MissionHistoryParent');

  const missionHistoryData = useSelector(fetchMissionHistory);
  let preparedMissionsListComponents;

  if (missionHistoryData && missionHistoryData.length > 0) {
    preparedMissionsListComponents = 
      <div className="mx-auto">
        <MissionHistory
          titles={['Title', 'Agencies', 'Type', 'Flight', 'Launched On']}
          missionHistory={missionHistoryData}
        />
      </div>
  } else {
    preparedMissionsListComponents =  
      <div className="col-12">
        <h2 className="text-white">Humanity is yet to launch a mission!!</h2>
      </div>
  }
  
  return (
    <div>
      <div className="bg-success text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold lh-1 text-white">Missions History</h1>
          <div className="col-lg-11 mx-auto">
            <p className="fs-5 mb-4 text-dark">All the launched missions info will appear here.</p>
            <div className="d-grid gap-2 d-lg-flex gy-3 overflow-scroll">
              {preparedMissionsListComponents}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
