import React from 'react';
import { MISSION_PREP_TIMES } from './prepareMissionApi';

const PrepareMissions = ({title, agency, type, flight}) => {

  console.log('Render -- PrepareMission - ' + title);

  return (
    <form className={'p-4 p-md-4 border rounded-3 bg-light'} style={{ 'width': '25rem'}}>
      <div className="card border-primary">
        <div className="card-header bg-white text-dark py-2"> <h4> Mission </h4></div>
        <div className="card-body"  style={{ 'min-width': '20rem'}}>
          <dl class="row text-dark">
            <dd class="col-3">Title:</dd>
            <dt class="col-9 text-start">{title}</dt>

            <dd class="col-3">Agency:</dd>
            <dt class="col-9 text-start">{agency}</dt>

            <dd class="col-3">Type:</dd>
            <dt class="col-9 text-start">{type}</dt>

            <dd class="col-3">Flight:</dd>
            <dt class="col-9 text-start">{flight}</dt>
          </dl>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-start">
            <div className={'form-floating sm-3'}>
              <select 
                id="flight"
                name="flightType"
                aria-label="Set mission flight type"
                value={flight} 
                // onChange={e => dispatch(setMissionFlight(e.target.value))}
                className={'form-select'}
              >
                <option value="none" selected hidden> Choose mission preparation time </option>
                {MISSION_PREP_TIMES.map((eachFlight) => <option value={eachFlight} >{eachFlight}</option>)}
              </select>
              <label htmlFor="flight">Preparation time</label>
            </div>
          </li>
          <li className="list-group-item text-start">
            <div className={'form-floating sm-3'}>
              <select 
                id="flight"
                name="flightType"
                aria-label="Set mission flight type"
                value={flight} 
                // onChange={e => dispatch(setMissionFlight(e.target.value))}
                className={'form-select'}
              >
                <option value="none" selected hidden> Provide launch initiation time </option>
                {MISSION_PREP_TIMES.map((eachFlight) => <option value={eachFlight} >{eachFlight}</option>)}
              </select>
              <label htmlFor="flight">Launch schedule</label>
            </div>
          </li>
        </ul>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-outline-secondary btn-md px-4">Edit</button>
            <button type="button" className="btn btn-md btn-primary px-4 me-sm-3 fw-bold"> Done </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PrepareMissions;
