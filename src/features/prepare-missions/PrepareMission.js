import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MISSION_PREP_TIMES, MISSION_LAUNCH_TIMES } from './prepareMissionApi';
import { removePrepMission } from './prepareMissionsSlice';
import { editMission } from '../create-mission/createMissionSlice';
import { scheduleMission } from '../launch-missions/launchMissionSlice';

const PrepareMission = ({id, title, agencies, type, flight}) => {

  const dispatch = useDispatch();
  // Declare a new local component level state variable for preperation & launch time
  const [prepTime, setPrepTime] = useState('');
  const [launchSchedule, setLaunchSchedule] = useState('');
  
  console.log('Render -- PrepareMission - ' + title);

  const handleEditMission = event => {
    event.preventDefault();
    dispatch(editMission({id, title, agencies, type, flight}));
    dispatch(removePrepMission(id));
  };

  const handlePrepMissionSubmit = event => {
    event.preventDefault();
    dispatch(scheduleMission({id, title, agencies, type, flight, prepTime, launchSchedule}));
    dispatch(removePrepMission(id));
  }

  return (
    <form 
      className={'p-4 p-md-4 border rounded-3 bg-light'} 
      style={{ 'width': '25rem'}}
      onSubmit={handlePrepMissionSubmit}
    >
      <div className="card border-success">
        <div className="card-header bg-white text-dark py-2"> <h4> Mission </h4></div>
        <div className="card-body"  style={{ 'minWidth': '25rem'}}>
          <dl className="row text-dark">
            <dd className="col-3">Title:</dd>
            <dt className="col-9 text-start">{title}</dt>

            <dd className="col-3">Agencies:</dd>
            <dt className="col-9 text-start">{agencies}</dt>

            <dd className="col-3">Type:</dd>
            <dt className="col-9 text-start">{type}</dt>

            <dd className="col-3">Flight:</dd>
            <dt className="col-9 text-start">{flight}</dt>
          </dl>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-start">
            <div className={'form-floating sm-3'}>
              <select 
                id="prepare"
                name="prepareTime"
                aria-label="Set mission flight type"
                value={prepTime} 
                onChange={e => setPrepTime(e.target.value)}
                className={'form-select'}
              >
                <option value="none" defaultValue hidden> Choose mission preparation time </option>
                {MISSION_PREP_TIMES.map((eachPrepTime) => 
                  <option 
                    key={eachPrepTime} 
                    value={eachPrepTime} 
                  >
                    {eachPrepTime}
                  </option>
                )}
              </select>
              <label htmlFor="prepareTime">Preparation time</label>
            </div>
          </li>
          <li className="list-group-item text-start">
            <div className={'form-floating sm-3'}>
              <select 
                id="launch"
                name="launchTime"
                aria-label="provide mission launch time"
                value={launchSchedule} 
                onChange={e => setLaunchSchedule(e.target.value)}
                className={'form-select'}
              >
                <option value="none" defaultValue hidden> Provide launch initiation time </option>
                {MISSION_LAUNCH_TIMES.map((eachLaunchTime) => 
                  <option 
                    key={eachLaunchTime.seconds.toString()} 
                    value={eachLaunchTime.seconds} 
                  >
                    {eachLaunchTime.time}
                  </option>
                )}
              </select>
              <label htmlFor="launchTime">Launch schedule</label>
            </div>
          </li>
        </ul>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <button 
              type="button" 
              className="btn btn-outline-secondary btn-md px-4"
              onClick={handleEditMission}
            >
                Edit
            </button>
            <button 
              type="submit" 
              className="btn btn-md btn-success px-4 me-sm-3 fw-bold"
            > 
            Done 
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PrepareMission;
