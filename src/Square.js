

const Square = (props) => {
    let click= props.value==="." ?"clickable square" : "no_clickable square";
    
    function squareClick(){
        if(props.value==="."){
            props.boardClick(props.rowIndex,props.columnIndex);
        }
    }

  return (<>
    <button className={click} onClick={squareClick}>
        {props.value}
    </button> 
  </>)
}

export default Square