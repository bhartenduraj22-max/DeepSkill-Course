import ListofPlayers from "./ListofPlayers";
import {
  OddPlayers,
  EvenPlayers,
  IndianPlayers
} from "./IndianPlayers";

function App() {
  return (
    <div>
      <ListofPlayers />

      <h1>Indian Team</h1>

      <h2>Odd Players</h2>
      {OddPlayers(IndianPlayers)}

      <h2>Even Players</h2>
      {EvenPlayers(IndianPlayers)}

      <h2>List of Indian Players Merged:</h2>

      {IndianPlayers.map((player, index) => (
        <div key={index}>Mr. {player}</div>
      ))}
    </div>
  );
}

export default App;
