const Turn = (props) => {
  let clasTurn=(props.win==="1"||props.win==="2") ?"myturn no_dis" : "myturn dis";
  let clasWin= (props.win==="1"||props.win==="2") ?"win dis" : "win no_dis";

  return (<>
      
      <header className={clasTurn}>
          Turno de {props.turns}
      </header>  
      <span className={clasWin}>Ganador Jugador {props.win}</span>
    </>)
  }
  
  export default Turn