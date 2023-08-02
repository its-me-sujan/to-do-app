import Title from "./components/Title";
import Example from './components/Example';
import Garage from "./components/Garage";
function App() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return <>
    <>
      <Title name="TODO App"/>
      <Example isGoal = {true}/>
      <Garage cars = {cars} />
    </>
  </>;
}

export default App;
