const App = (props) => {
    const { notes } = props
  
    return (
        <div>
            <ul>
                {notes.map((nota) =>{
                    return <><li>{nota.id}</li><li><strong>{nota.content}</strong></li></>
                })}
            </ul>
        </div>
    )
  }
  
  export default App