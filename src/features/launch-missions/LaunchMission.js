import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMissionToPrep } from '../prepare-missions/prepareMissionsSlice';
import { addMissionToHistory } from '../missions-history/MissionHistorySlice';
import { removeLaunchMission } from '../launch-missions/launchMissionSlice';

const LaunchMission = ({id, title, agencies, type, flight, prepTime, launchSchedule, travelTime}) => {
  
  const dispatch = useDispatch();
  const [launchTimer, setLaunchTimer] = useState(launchSchedule || 0);
  const [travelTimer, setTravelTimer] = useState('Launching ....');

  useEffect(() => {
    const launchAndTravelInterval = setInterval(() => {
      if (launchTimer > 0) {
        setLaunchTimer(launchTimer - 1);
      } else if (launchTimer === 0 && travelTimer !== 0) {
        setLaunchTimer('Done');
        setTravelTimer(travelTime);
      } else if (launchTimer === 'Done' && typeof travelTimer == 'number' && travelTimer > 0) {
        setTravelTimer(travelTimer - 1);
      } else {
        setTravelTimer('Done');
        const launchedOn = new Date().toLocaleDateString();
        dispatch(addMissionToHistory({id, title, agencies, type, flight, launchedOn}));
        dispatch(removeLaunchMission(id));
      }
    }, 1000);
    
    return () => {
      clearInterval(launchAndTravelInterval);
    };
    // Only re-run the effect if any of below dependencies changes
  }, [launchTimer, travelTimer, travelTime, dispatch, id, title, agencies, type, flight]); 

  /**
   * Handles the last minute Go or No-GO.
   * @param {*} event 
   */
  const handleCallOff = event => {
    event.preventDefault();
    dispatch(addMissionToPrep({id, title, agencies, type, flight, launchSchedule, travelTime}));
    dispatch(removeLaunchMission(id));
  };

  /**
   * Handles the self destruct
   * @param {*} event 
   */
  const handleSelfDestruct = event => {
    event.preventDefault();
    dispatch(removeLaunchMission(id));
  };

  return (    
      <div className="card border-success bg-dark p-3 p-md-3 border rounded-3 bg-light" style={{ 'width': '25rem'}}>
        <div className="card-header text-white py-2"> <h4> Mission </h4></div>
        <div className="card-body text-white"  style={{ 'minWidth': '25rem'}}>
          <dl className="row text-start">
            <dd className="col-3">Title:</dd>
            <dt className="col-9">{title}</dt>

            <dd className="col-3">Agencies:</dd>
            <dt className="col-9">{agencies}</dt>

            <dd className="col-3">Type:</dd>
            <dt className="col-9">{type}</dt>

            <dd className="col-3">Flight:</dd>
            <dt className="col-9">{flight}</dt>

            <dd className="col-3">Prepare:</dd>
            <dt className="col-9">{prepTime}</dt>

            <dd className="col-3">Launch:</dd>
            <dt className="col-9">
              <span className={'badge rounded-pill bg-success fw-bold fs-5'}> {launchTimer} </span>
            </dt>

            <dd className="col-3">Travel:</dd>
            <dt className="col-9">
              <span className={'badge rounded-pill bg-primary fw-bold fs-5'}> {travelTimer} </span>
            </dt>
          </dl>
        </div>
        <div className="card-footer border-secondary">
          <div className="d-flex justify-content-between align-items-center">
            <button 
              type="button" 
              className="btn btn-warning btn-md px-4"
              onClick={handleCallOff}
            >
              Call Off
            </button>
            
            <button 
              type="button" 
              className="btn btn-danger btn-md px-4"
              onClick={handleSelfDestruct}
            >
              Self Destruct
            </button>
          </div>
        </div>
      </div>
  );
};

export default LaunchMission;
