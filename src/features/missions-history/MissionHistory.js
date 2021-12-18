import React from 'react';

export function MissionHistory({titles, missionHistory}) {

  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          { titles.map((eachtitle) => <th> {eachtitle }</th>) }
        </tr>
      </thead>
      <tbody>
        {missionHistory.map(( eachMission ) => {
            return (
              <tr key={eachMission.id}>
                <td>{eachMission.title}</td>
                <td>{eachMission.agencies}</td>
                <td>{eachMission.type}</td>
                <td>{eachMission.flight}</td>
                <td>{eachMission.launchedOn}</td>
              </tr>
            );
          })}
        
      </tbody>
    </table>
  );
}
