import Board from "./Board.jsx";
import { useState } from "react";


const Game = ({playerOne, playerTwo}) => {

    const [turn, setTurn] = useState();

    const setTurns = (turns) =>{
        if(turns === 1){
            setTurn(2);
        }else{
            setTurn(1);
        }
    }

    return(
        <div>
        {
            turn === 1 ? <h1 className = "heading" >It's {playerOne}'s turn</h1> : <h1 className = "heading" >It's {playerTwo}'s turn</h1>
        }
            <Board
            setTurns = {setTurns}
            turn={turn}
            />

        </div>
      
    )
}

export default Game;