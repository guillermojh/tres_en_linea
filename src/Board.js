import Square from './Square'

const Board = (props) => {
  return (<div className='board'>
    {
        props.values.map((rowValues,rowIndex) => {
            let row = rowValues.map((value,columnIndex)=>{
                 return <Square  
                          boardClick={props.appClick}
                          key={rowIndex +"-"+ columnIndex}
                          value={value}
                          rowIndex={rowIndex}
                          columnIndex={columnIndex}
                        />
            });
            return <div key={"row"+rowIndex}>{row}</div>
            })
    }
  </div>)
}

export default Board