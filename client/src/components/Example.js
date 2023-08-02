function MissedGoal() {
  return <h1>MISSED!</h1>
}

function MadeGoal() {
  return <h1>GOAL!</h1>
}

export default function Example(props) {
  const isGoal = props.isGoal;
  if(isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}
