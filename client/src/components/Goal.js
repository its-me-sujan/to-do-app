export default function Goal(props) {
    const isGoal = props.isGoal;
  return (
    <>
        { isGoal ? <MadeGoal/> : <MissedGoal />}
    </>
  )
}
function MissedGoal() {
    return <h1>MISSED!</h1>
  }
  
  function MadeGoal() {
    return <h1>GOAL!</h1>
  }
