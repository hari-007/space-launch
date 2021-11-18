import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMission, setMissionTitle,
  setMissionAgency, setMissionType, setMissionFlight 
} from './createMissionSlice';
import { addMission } from '../prepare-missions/prepareMissionsSlice';
// import { SPACE_EXPLORATION_TYPES, SPACE_FLIGHT_TYPE } from './createMissionApi';

export function CreateMission() {
  const mission = useSelector(selectMission);

  const dispatch = useDispatch();

  // Here creates a local state props with store mission object properties
  const title = mission.title;
  const agency = mission.agency;
  const type = mission.type;
  const flight = mission.flight;

 const handleSubmit = event => {
    event.preventDefault();
    dispatch(addMission({title, agency, type, flight}));
  };

  return (
    <div>
      <div className={'container col-xl-10 col-xxl-8 px-4 py-5'}>
      <div className={'row align-items-center g-lg-5 py-5'}>
        <div className={'col-lg-7 text-center text-lg-start'}>
          <h1 className={'display-4 fw-bold lh-1 mb-3'}>Create Mission</h1>
          <p className={'col-lg-10 fs-4'}>
            As a first step, mission creation takes place here. 
            After that mission preparation for launch and then launch happens. 
            Finally every launched mission will save as history</p>
        </div>
        <div className={'col-md-10 mx-auto col-lg-5'}>
          <form className={'p-4 p-md-5 border rounded-3 bg-light'} onSubmit={handleSubmit}>
            <div className={'form-floating mb-3'}>
              <input 
                id="title"
                name="missionTitle"
                className={'form-control'}
                aria-label="Set mission title"
                placeholder="Mission title"
                value={title}
                onChange={e => dispatch(setMissionTitle(e.target.value))}
              />
              <label htmlFor="title">Mission Title</label>
            </div>
            <div className={'form-floating mb-3'}>
              <input 
                id="agency"
                name="spaceAgency"
                className={'form-control'}
                aria-label="Set mission agency"
                placeholder="Space Agency"
                value={agency}
                onChange={e => dispatch(setMissionAgency(e.target.value))}
              />
              <label htmlFor="agency">Space Agency</label>
            </div>
            <div className={'form-floating mb-3'}>
              <input
                id="type"
                name="explorationType"
                className={'form-control'}
                aria-label="Set mission exploration type"
                placeholder="Mission Type"
                value={type}
                onChange={e => dispatch(setMissionType(e.target.value))}
              />
              <label htmlFor="type">Mission Type</label>
            </div>
            <div className={'form-floating mb-3'}>
               <input
                id="flight"
                name="flightType"
                className={'form-control'}
                aria-label="Set mission flight type"
                placeholder="Flight Type"
                value={flight}
                onChange={e => dispatch(setMissionFlight(e.target.value))}
              />
              <label htmlFor="flight">Flight Type</label>
            </div>
            <button className={'w-100 btn btn-lg btn-primary'} type="submit">Create</button>
            <hr className={'my-4'} />
            <small className={'text-muted'}>By clicking Create, you are starting mission preparation below.</small>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}
