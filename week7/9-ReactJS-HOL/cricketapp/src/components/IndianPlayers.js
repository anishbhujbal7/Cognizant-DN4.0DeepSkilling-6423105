
import React from "react";

const IndianPlayers = () => {
  const indianPlayers = ["Rohit", "Gill", "Virat", "Iyer", "Rahul", "Hardik", "Jadeja", "Bumrah", "Siraj", "Shami", "Kuldeep"];

  const oddTeam = indianPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = indianPlayers.filter((_, index) => index % 2 === 0);

  const T20players = ["Rohit", "Virat", "SKY"];
  const RanjiTrophyPlayers = ["Shreyas", "Sarfaraz", "Ruturaj"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
