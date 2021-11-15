import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createMission, resetMission } from './createMissionSlice';
import styles from './CreateMission.module.css';
// import { SPACE_EXPLORATION_TYPES, SPACE_FLIGHT_TYPE } from './createMissionApi';

export function CreateMission() {
  const dispatch = useDispatch();

  // Here creates a local state props with store mission object properties
  const [title, setTitle] = useState('');
  const [agency, setAgency] = useState('');
  const [type, setType] = useState('');
  const [flight, setFlight] = useState('');

 const handleSubmit = event => {
    event.preventDefault();
    dispatch(createMission({title, agency, type, flight}));
    // dispatch(resetMission());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="title">
            <span>Mission Title: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input 
            id="title"
            name="missionTitle"
            className={styles.textbox}
            aria-label="Set mission title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            size="25"
          />
        </p>

        <p>
          <label htmlFor="agency">
            <span>Space Agency: </span>
            <strong><abbr title="required"></abbr></strong>
          </label>
          <input 
            id="agency"
            name="spaceAgency"
            className={styles.textbox}
            aria-label="Set mission agency"
            value={agency}
            onChange={e => setAgency(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="type">
            <span>Exploration Type: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input
            id="type"
            name="explorationType"
            className={styles.textbox}
            aria-label="Set mission exploration type"
            value={type}
            onChange={e => setType(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="flight">
            <span>Flight Type: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input
            id="flight"
            name="flightType"
            className={styles.textbox}
            aria-label="Set mission flight type"
            value={flight}
            onChange={e => setFlight(e.target.value)}
          />
        </p>
        
        <p>
          <button className={styles.button} type="submit">Create Mission</button>
        </p>
        
      </form>
    </div>
  );
}
