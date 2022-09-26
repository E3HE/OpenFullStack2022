const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.p1} {props.e1}</p>
      <p>{props.p2} {props.e2}</p>
      <p>{props.p3} {props.e3}</p>
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>
        Number of exercices {props.eka + props.toka + props.kolma}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <Header name={course}/>
        <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3} />
        <Total eka={exercises1} toka={exercises2} kolma={exercises3}/>
    </div>
  )
}

export default App