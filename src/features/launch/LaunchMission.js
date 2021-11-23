import React from 'react';

const LaunchMissions = ({title, agency, type, flight}) => {

  console.log('Render -- PrepareMission - ' + title);
// <form className={'p-4 p-md-4 border rounded-3 bg-light'} style={{ 'width': '25rem'}}>
  return (
    
      <div className="card border-success bg-dark p-3 p-md-3 border rounded-3 bg-light">
        <div className="card-header text-white py-2"> <h4> Mission </h4></div>
        <div className="card-body text-white"  style={{ 'min-width': '22rem'}}>
          <dl class="row text-start">
            <dd class="col-3">Title:</dd>
            <dt class="col-9">{title}</dt>

            <dd class="col-3">Agency:</dd>
            <dt class="col-9">{agency}</dt>

            <dd class="col-3">Type:</dd>
            <dt class="col-9">{type}</dt>

            <dd class="col-3">Flight:</dd>
            <dt class="col-9">{flight}</dt>
          </dl>
        </div>
        <div className="card-footer border-secondary">
          <div className="justify-content-between align-items-center">
            <button type="button" className="btn btn-danger btn-md px-4">Stop</button>
          </div>
        </div>
      </div>
  );
};

export default LaunchMissions;
