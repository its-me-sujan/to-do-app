import Title from "./components/Title";
import Example from './components/Example';
import Garage from "./components/Garage";
import Goal from "./components/Goal";
import FavoriteColor from "./components/FavoriteColor";
import CarHook from "./components/CarHook";
import Timer from "./components/Timer";
import FetchData from "./components/FetchData";

function App() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return <>
    <>
      <Title name="TODO App"/>
      <Example isGoal = {false}/>
      <Garage cars = {cars} />
      <Goal isGoal = {true} />
      <FavoriteColor />
      <CarHook />
      <Timer />
      <FetchData />
    </>
  </>;
}

export default App;
