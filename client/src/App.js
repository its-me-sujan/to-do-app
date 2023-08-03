import Title from "./components/Title";
// import Example from './components/Example';
// import Garage from "./components/Garage";
// import Goal from "./components/Goal";
// import FavoriteColor from "./components/FavoriteColor";
// import CarHook from "./components/CarHook";
// import Timer from "./components/Timer";
// import FetchData from "./components/FetchData";
import CustomHook from "./components/CustomHook";
import { Col,Container, Row } from "react-bootstrap";


function App() {
  // const cars = ['Ford', 'BMW', 'Audi'];
  return <>
    <>
      <Container>
        <Row>
            <Col md={{span: 6, offset: 3}}>
              <Title name = "TODO App"/>
              <CustomHook />
            </Col>
        </Row>

      </Container>
    </>
  </>;
}

export default App;
