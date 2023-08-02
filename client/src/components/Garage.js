import Car from "./Car";
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

