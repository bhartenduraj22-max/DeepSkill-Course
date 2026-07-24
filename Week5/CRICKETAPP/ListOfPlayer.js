const players = [
  { name: "Sachin", score: 95 },
  { name: "Dhoni", score: 80 },
  { name: "Virat", score: 90 },
  { name: "Rohit", score: 85 },
  { name: "Yuvraj", score: 70 },
  { name: "Raina", score: 65 },
  { name: "Jadeja", score: 75 },
  { name: "Ashwin", score: 60 },
  { name: "Bumrah", score: 55 },
  { name: "Shami", score: 68 },
  { name: "Hardik", score: 72 }
];

export function ListofPlayers() {
  return (
    <div>
      <h1>List of Players</h1>

      {players.map((item, index) => (
        <div key={index}>
          Mr. {item.name} <span>{item.score}</span>
        </div>
      ))}

      <h1>List of Players having Scores Less than or Equal to 70</h1>

      {players
        .filter((item) => item.score <= 70)
        .map((item, index) => (
          <div key={index}>
            Mr. {item.name} <span>{item.score}</span>
          </div>
        ))}
    </div>
  );
}

export default ListofPlayers;
