import React from 'react';
import { useSelector } from 'react-redux';
import { fetchPreparedMissionList } from './prepareMissionsSlice';
import PrepareMission from './PrepareMission';

export function PrepareMissionsList() {

  const preparedMissionsListData = useSelector(fetchPreparedMissionList);
  let preparedMissionsListComponents;

  if (preparedMissionsListData && preparedMissionsListData.length > 0) {
    preparedMissionsListComponents = preparedMissionsListData.map((eachMission) => 
      <div className="mx-auto" key={eachMission.id.toString()}>
        <PrepareMission id={eachMission.id}
          title={eachMission.title}
          agencies={eachMission.agencies}
          type={eachMission.type}
          flight={eachMission.flight}
        />
      </div>
    );
  } else {
    preparedMissionsListComponents =  
      <div className="col-12">
        <h2 className="text-warning">No planned missions available for prepare!!</h2>
      </div>
  }
  
  return (
    <div>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold lh-1 text-white">Prepare Missions</h1>
          <div className="col-lg-11 mx-auto">
            <p className="fs-5 mb-4">All the created missions will appear here for preparation.</p>
            <div className="d-grid gap-2 d-lg-flex gy-3 overflow-scroll">
              {preparedMissionsListComponents}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
