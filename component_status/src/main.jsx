import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'

const PeligroNoUsar = () => {
  return <h1>Componente no Usado</h1>
}
const ListaClicks = ({click}) => {
  return <p>{click.join(", ")}</p>
}
const App = () => {
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)
    const [counter, setCounter] = useState({
        left: 0,
        right: 0,
        click: [],
    })
    return (
      <div>
        {counter.left}
        <button onClick={(e) => {
          console.log(e)
          setCounter({
                ...counter, // Trer todos las prpiedades de counter, lo que se defina despues se modifica
                left: counter.left + 1, 
                click: [...counter.click, 'L']
            })}}>
          left
        </button>
        <button onClick={() => setCounter({
            ...counter,
            right: counter.right + 1,
            click: [...counter.click, 'R']
        })}>
          right
        </button>
        {counter.right}
        <p>Lista de Clicks: {counter.click}</p>
        <p>{counter.click.length}</p>
        {counter.click.length === 0
        ? <PeligroNoUsar/> :
        <ListaClicks click={counter.click}/>}
      </div>
    )
  }
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
  