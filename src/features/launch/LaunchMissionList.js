import React from 'react';
import { useSelector } from 'react-redux';
import { fetchPreparedMissionList } from '../prepare-missions/prepareMissionsSlice';
import LaunchMission from './LaunchMission';
// import { SPACE_EXPLORATION_TYPES, SPACE_FLIGHT_TYPE } from './createMissionApi';

export function LaunchMissionsList() {

  console.log('Render -- LaunchMissionList');

  const launchMissionsListData = useSelector(fetchPreparedMissionList);
  let launchMissionsListComponents;

  if (launchMissionsListData && launchMissionsListData.length > 0) {
    launchMissionsListComponents = launchMissionsListData.map((eachMission) => 
      <div className="mx-auto" key={eachMission.id.toString()}>
        <LaunchMission id={eachMission.id}
          title={eachMission.title}
          agency={eachMission.agency}
          type={eachMission.type}
          flight={eachMission.flight}
        />
      </div>
    );
  } else {
    launchMissionsListComponents =  
      <div className="mx-auto">
       <h2 className="text-dark"> No prepared missions available for launch!!</h2>
      </div>
  }
  

  return (
    <div>
      <div className="bg-warning text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold lh-1 text-dark">Launch Missions</h1>
          <div className="col-lg-11 mx-auto">
            <p className="fs-5 mb-4">All the prepared and ready to be launched missions will appear here.</p>
            <div className="d-grid gap-2 d-lg-flex gy-3 overflow-scroll">
              {launchMissionsListComponents}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
