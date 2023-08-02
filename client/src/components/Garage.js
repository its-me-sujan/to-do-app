export default function Garage(props) {
    const cars = props.cars;
  return (
    <>
        <h1>who lives in my garage?</h1>
        <ul>
          {cars.map((car) => < Car brand = {car} />)}
        </ul>
    </>
  )
}

function Car(props) {
  return <li>I am a {props.brand}</li>
}