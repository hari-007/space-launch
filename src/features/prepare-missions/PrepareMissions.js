import React from 'react';
// import { SPACE_EXPLORATION_TYPES, SPACE_FLIGHT_TYPE } from './createMissionApi';

export function PrepareMissions() {


  return (
    <div className="container overflow-hidden">
      <div className="row gy-3">
        <div className="col-12">
          <div className="card border-primary" style={{ 'width': '18rem;'}}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" class="btn btn-md btn-secondary"> Edit </button>
                <button type="button" class="btn btn-md btn-primary"> Done </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card border-primary" style={{ 'width': '18rem;'}}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" class="btn btn-sm btn-secondary"> Edit </button>
                  <button type="button" class="btn btn-sm btn-primary"> Done </button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
