import React from 'react';

const BaseStats = ({ stats }) => {
  return (
    <div className="base-stats">
      <h4 className="base-stats-title">Base Stats</h4>
      {Object.keys(stats).map((statName) => (
        <div className="stat" key={statName}>
          <span className="stat-info">{statName.toUpperCase()}</span>
          <span className="stat-percentage">{stats[statName]}</span>
          <div className="stat-bar">
            <div className="stat-fill" style={{ width: `${stats[statName]}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BaseStats;
