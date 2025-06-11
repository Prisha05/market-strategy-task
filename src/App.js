import React, { useState, useEffect } from 'react';
import './App.css';
import ToggleView from './components/ToggleView';
import DateDropdown from './components/DateDropdown';
import StrategyCards from './components/StrategyCards';
import { strategyArray, dateArray } from './data/strategyData'; 


function App() {
  const [selectedView, setSelectedView] = useState('Bullish');
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    setSelectedDate(dateArray[0]);
  }, [selectedView]);

  useEffect(() => {
    const viewData = strategyArray.find((v) => v.View === selectedView); 
    if (viewData && selectedDate) {
      setStrategies(viewData.Value[selectedDate] || []);
    } else {
      setStrategies([]);
    }
  }, [selectedDate, selectedView]);

  return (
    <div className="App">
      <h2>Nerve Assignment</h2>
      <div className="subtitle">Select your market view and date to see recommended strategies.</div>
      <div className="divider" />
      <ToggleView selectedView={selectedView} setSelectedView={setSelectedView} />
      <DateDropdown selectedDate={selectedDate} setSelectedDate={setSelectedDate} dateOptions={dateArray} />
      <StrategyCards strategies={strategies} selectedDate={selectedDate} />
    </div>
  );
}

export default App;
