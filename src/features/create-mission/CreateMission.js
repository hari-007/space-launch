import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMission, setMissionTitle, setMissionAgencies, 
  setMissionType, setMissionFlight, resetMissonInfo 
} from './createMissionSlice';
import { addMissionToPrep } from '../prepare-missions/prepareMissionsSlice';
import { SPACE_EXPLORATION_TYPES, SPACE_FLIGHT_TYPE } from './createMissionApi';

export function CreateMission() {
  const mission = useSelector(selectMission);

  const dispatch = useDispatch();

  // Here creates a local state props with store mission object properties
  const id = mission.id;
  const title = mission.title;
  const agencies = mission.agencies;
  const type = mission.type;
  const flight = mission.flight;

  const handleSubmit = event => {
    event.preventDefault();
    const missionId = id || Date.now(); // Adds unique Id to every mission 
    dispatch(addMissionToPrep({id: missionId, title, agencies, type, flight}));
    dispatch(resetMissonInfo());
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
                  id="agencies"
                  name="spaceAgencies"
                  className={'form-control'}
                  aria-label="Set mission agencies"
                  placeholder="Space Agencies"
                  value={agencies}
                  onChange={e => dispatch(setMissionAgencies(e.target.value))}
                />
                <label htmlFor="agencies">Space Agencies</label>
              </div>
              <div className={'form-floating mb-3'}>
                <select 
                  id="type"
                  name="explorationType"
                  value={type}
                  aria-label="Set mission exploration type"
                  onChange={e => dispatch(setMissionType(e.target.value))}
                  className={'form-select'}
                >
                  <option value="none" defaultValue hidden> Select exploration type </option>
                  {SPACE_EXPLORATION_TYPES.map((eachExploraiton) => 
                    <option 
                      key={eachExploraiton}
                      value={eachExploraiton}
                    >
                      {eachExploraiton}
                    </option>
                  )}
                </select>

                <label htmlFor="type">Mission Type</label>
              </div>
              <div className={'form-floating mb-3'}>
                <select 
                  id="flight"
                  name="flightType"
                  aria-label="Set mission flight type"
                  value={flight} 
                  onChange={e => dispatch(setMissionFlight(e.target.value))}
                  className={'form-select'}
                >
                  <option value="none" defaultValue hidden> Select flight type </option>
                  {SPACE_FLIGHT_TYPE.map((eachFlight) => 
                    <option 
                      key={eachFlight}
                      value={eachFlight} 
                    >
                      {eachFlight}
                    </option>
                  )}
                </select>
                <label htmlFor="flight">Flight Type</label>
              </div>
              <button 
                type="submit"
                className={id != null ? 'w-100 btn btn-lg btn-secondary' : 'w-100 btn btn-lg btn-primary'}
              >
                {id != null ? 'Update' : 'Create'}
              </button>
              <hr className={'my-4'} />
              <small className={'text-muted'}>By clicking Create, you are starting mission preparation below.</small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
