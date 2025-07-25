import React from 'react';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        name="Anish Bhujbal"
        school="Green Valley School"
        total={430}
        goal="Become an Engineer"
      />
    </div>
  );
}

export default App;
