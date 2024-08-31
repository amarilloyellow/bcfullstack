const parts = [{
  name: 'Fundamentals of React',
  exercises: 10
}, {
  name: 'Using props to pass data',
  exercises: 7
}, {
  name: 'State of a component',
  exercises: 14
}]

const Part = (props) => {
  return <p>{props.titulo} {props.nexec}</p>
}
const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = () => {
  return <>
    <Part titulo={parts[0].name} nexec={parts[0].exercises} />
    <Part titulo={parts[1].name} nexec={parts[1].exercises} />
    <Part titulo={parts[2].name} nexec={parts[2].exercises} />
  </>
}

const Total = () => {
  return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
}

const App = () => {
  const course = 'Half Puta application development'

  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total />
    </div>
  )
}

export default App