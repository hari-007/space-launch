import React, { useState, useEffect } from 'react';

const LaunchTimmer = ({launchSchedule}) => {
  const [launchTimer, setLaunchTimer] = useState(launchSchedule);

  useEffect(() => {
    const launchInterval = setInterval(() => setLaunchTimer(launchTimer - 1), 1000);
    
    return () => {
      clearInterval(launchInterval);
    };
  }, [launchTimer]); // Only re-run the effect if count changes

  return (
    <span className={'badge rounded-pill bg-danger fw-bold fs-5'}> {launchTimer} </span>
  )
}


const LaunchMission = ({id, title, agencies, type, flight, prepTime, launchSchedule}) => {

  console.log('Render -- Launch mission - ' + id);

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
          </dl>
        </div>
        <div className="card-footer border-secondary">
          <div className="d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-danger btn-md px-4">Stop</button>
            <LaunchTimmer launchSchedule={launchSchedule} />
          </div>
        </div>
      </div>
  );
};

export default LaunchMission;
