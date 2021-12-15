import Login from "./components/Login.jsx";
import "./styles/style.css";
import Game from "./components/Game.jsx";
import { useState } from "react";


function App() {

  const [login, setLogin] = useState(false);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const gettingPlayers = (temp1, temp2) => {
    setPlayerOne(playerOne);
    setPlayerTwo(playerTwo);
  }


  return (
    <div>
        <Login login={login} setLogin={setLogin} gettingPlayers={gettingPlayers} />
        <Game playerOne={playerOne} playerTwo={playerTwo} />
    </div>
  );
}

export default App;
