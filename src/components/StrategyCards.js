import React from 'react';

const StrategyCards = ({ strategies, selectedDate }) => {
  if (!strategies || strategies.length === 0) {
    return (
      <div className="empty-state">
        <p>
          There are no strategies for <span className="highlight">{selectedDate}</span>
        </p>
      </div>
    );
  }

  const strategyCountMap = strategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="cards">
      {Object.entries(strategyCountMap).map(([name, count], idx) => (
        <div key={idx} className="card">
          <div className="card-title">{name}</div>
          <div className="card-count">
            {count} {count === 1 ? 'Strategy' : 'Strategies'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StrategyCards;
