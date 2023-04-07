import {useState} from "react";
import Turn from './Turn'
import Header from './Header';
import Board from './Board';
import Reset from './Reset'

const PLAYERX = "Jugador 1 [ X ]";
const PLAYER0 = "Jugador 2 [ 0 ]";


const App = () => {
  const [turn, setTurn] = useState(PLAYERX) 
  const [moves,setMoves] = useState(0);
  const [win,setWin] = useState("."); 
  const [values, setvalues] = useState([
    [".",".","."],
    [".",".","."],
    [".",".","."]
  ]);

  function appClick(rowNumber, columNumber){
    // line:19 para crear una copia de la matris
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turn===PLAYERX ? "X" : "0";
    valuesCopy[rowNumber][columNumber] = newMovement;
    // console.log("click en " + rowNumber + columNumber);

    let condX = (
      (valuesCopy[0][0]==="X"&valuesCopy[0][0]===valuesCopy[0][1]&valuesCopy[0][0]===valuesCopy[0][2])||
      (valuesCopy[0][0]==="X"&valuesCopy[0][0]===valuesCopy[1][0]&valuesCopy[0][0]===valuesCopy[2][0])||
      (valuesCopy[0][0]==="X"&valuesCopy[0][0]===valuesCopy[1][1]&valuesCopy[0][0]===valuesCopy[2][2])||
      (valuesCopy[2][2]==="X"&valuesCopy[2][2]===valuesCopy[2][0]&valuesCopy[2][2]===valuesCopy[2][1])||
      (valuesCopy[2][2]==="X"&valuesCopy[2][2]===valuesCopy[0][2]&valuesCopy[2][2]===valuesCopy[1][2])||
      (valuesCopy[1][1]==="X"&valuesCopy[1][1]===valuesCopy[1][0]&valuesCopy[1][1]===valuesCopy[1][2])||
      (valuesCopy[1][1]==="X"&valuesCopy[1][1]===valuesCopy[0][1]&valuesCopy[1][1]===valuesCopy[2][1])||
      (valuesCopy[1][1]==="X"&valuesCopy[1][1]===valuesCopy[0][2]&valuesCopy[1][1]===valuesCopy[2][0]));

    let cond0 = (
      (valuesCopy[0][0]==="0"&valuesCopy[0][0]===valuesCopy[0][1]&valuesCopy[0][0]===valuesCopy[0][2])||
      (valuesCopy[0][0]==="0"&valuesCopy[0][0]===valuesCopy[1][0]&valuesCopy[0][0]===valuesCopy[2][0])||
      (valuesCopy[0][0]==="0"&valuesCopy[0][0]===valuesCopy[1][1]&valuesCopy[0][0]===valuesCopy[2][2])||
      (valuesCopy[2][2]==="0"&valuesCopy[2][2]===valuesCopy[2][0]&valuesCopy[2][2]===valuesCopy[2][1])||
      (valuesCopy[2][2]==="0"&valuesCopy[2][2]===valuesCopy[0][2]&valuesCopy[2][2]===valuesCopy[1][2])||
      (valuesCopy[1][1]==="0"&valuesCopy[1][1]===valuesCopy[1][0]&valuesCopy[1][1]===valuesCopy[1][2])||
      (valuesCopy[1][1]==="0"&valuesCopy[1][1]===valuesCopy[0][1]&valuesCopy[1][1]===valuesCopy[2][1])||
      (valuesCopy[1][1]==="0"&valuesCopy[1][1]===valuesCopy[0][2]&valuesCopy[1][1]===valuesCopy[2][0])
      );

    setTurn(turn===PLAYERX ? PLAYER0 : PLAYERX);
    setvalues(valuesCopy);
    setMoves(moves=>moves+1);
    setWin(condX===1 ? win=>"1":(cond0===1 && (win=>"2")))
  } 

  function resetClick(){
    setvalues([
      [".",".","."],
      [".",".","."],
      [".",".","."]
    ]);
    setTurn(PLAYERX);
    setMoves(0);
    setWin(".");
  }

  return (<div className="App">
    <Header/>
    <Turn turns = {turn} win = {win}/>
    <Board values = {values} appClick={appClick}/>
    <h3>Numero de movimientos: {moves}</h3>
    <Reset resetClick={resetClick}/>
  </div>)
}

export default App