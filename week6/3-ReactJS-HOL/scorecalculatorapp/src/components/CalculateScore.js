import React from 'react';
import './Stylesheets/mystyle.css'

function CalculateScore(props) {
  const { name, school, total, goal } = props;

  // Assume 5 subjects for average
  const average = total / 5;

  return (
    <div className="score-card">
      <h2>Student Score Report</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average}</p>
    </div>
  );
}

export default CalculateScore;
