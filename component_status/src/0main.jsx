import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'

const Counter = ({contador}) => {
  return <h1>{contador}</h1>
}
const App = () => {
  let [contador, contadorUpdate] = useState(1)
  const cambio = (op)=> {
    if (op){
      return () => contadorUpdate(contador + 1)
    } else {
      return () => contadorUpdate(contador - 1)
    }
  }
  const resetear = ()=> {
    contadorUpdate(0)
  }
  
  const esPar = contador % 2 === 0
  return <>
    <Counter contador={contador}/>
    {/* Condicional: `?`, Evalua si es Vedadero, `:`: actua como un else  */}
    <p>{esPar ? 'E` par pibe' : 'No e` par pibe'}</p>
    <button onClick={cambio(true)}>Aumente Pibe</button>
    <button onClick={resetear}>Resetea Pibe</button>
    <button onClick={cambio(false)}>Decremanta Pibe</button>
  </>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

