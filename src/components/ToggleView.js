import React from 'react';

const ToggleView = ({ selectedView, setSelectedView }) => {
  const views = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];

  return (
    <div className="toggle-container">
      {views.map((view) => (
        <button
          key={view}
          onClick={() => setSelectedView(view)}
          className={`toggle-button ${selectedView === view ? 'active' : ''}`}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ToggleView;
