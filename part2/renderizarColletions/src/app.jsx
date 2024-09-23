import { Note } from "./note"
import { useState } from "react"

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('')
    // crear estado para funcionar como interructor
    const [showAll, setShowAll] = useState(true)

    const handleChange = (e) => {
        setNewNote(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newNote)
        const notaAnadir = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5
        }
        setNotes([...notes, notaAnadir])
        setNewNote("")
    }

    const handleShowAll = () => {
        setShowAll(() => !showAll)
    }

    if (!notes) {
        return <><h1>Conchetumare culiao</h1></>
    }
    return <>
        {/* Botton para cambiar estado entre true false */}
        <button onClick={handleShowAll}>{showAll ? 'Mostrar Importante' : 'Mostrar Todo'}</button>
        <div>
            {notes
            .filter(nota => {
                if(showAll === true) return true;
                return nota.important === true
            })
            .map(nota => <Note key={nota.id} {...nota}/>)}
        </div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Chucha e tu mare" onChange={handleChange}/>
            <button >Crear Manico</button>
        </form>
    </>
  }
  
  export default App