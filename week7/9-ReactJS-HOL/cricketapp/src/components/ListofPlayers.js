
import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 90 },
    { name: "Rahul", score: 65 },
    { name: "Dhoni", score: 78 },
    { name: "Jadeja", score: 60 },
    { name: "Bumrah", score: 95 },
    { name: "Shami", score: 72 },
    { name: "Ashwin", score: 67 },
    { name: "Pant", score: 88 },
    { name: "Kohli", score: 55 },
    { name: "Surya", score: 82 },
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}: {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name}: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
