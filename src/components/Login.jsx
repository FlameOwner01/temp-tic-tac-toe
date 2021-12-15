import { useState } from "react";


const Login = ({gettingPlayers, login, setLogin}) => {
   
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");


    const renderInput = () => {
        var temp1 = document.getElementById("input1").value;
        var temp2 = document.getElementById("input2").value;
        var isEmpty = false;
        
        
        if(temp1 ===""){
            document.getElementById("input1").value = "Can't be empty!";
            isEmpty = true;
        }
        if(temp2 === ""){
            document.getElementById("input2").value = "Can't be empty!";
            isEmpty = true;
        }
    
        if(isEmpty) {
             return; 
        }else{
            setPlayer1(temp1);
            setPlayer2(temp2);
            console.log("player1: ", player1, "player2: ",player2,"temp1: ",  temp1,"temp2: ", temp2);
            gettingPlayers(player1, player2);           
            setLogin(true);
        }
    
    }

    return(

        <div className="all">
            {
                login ? null
                    : <div className="container"><h2>Player 1</h2>
                    <input type="text" id="input1" className="input" />
                    <h2>Player 2</h2>
                    <input type="text" id="input2" className="input" />
                    <button className="btn" onClick ={() =>{
                        renderInput();
                        }}>Start</button></div>
            }
              
        
        
        </div>
    )
}


export default Login;

