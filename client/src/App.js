import { Col,Container, Row } from "react-bootstrap";
import AddTodo from "./components/AddTodo";
import {API_SERVER} from "./constants";
import Title from "./components/Title";
import Todo from "./pages/Todo";

function App() {
  return <>
    <>
      <Container>
        <Row>
            <Col md={{span: 6, offset: 3}}>
              <Title name = "TODO App"/>
              <AddTodo label = "Add New Task" placeholder = "Eg: Do Homework" url={`${API_SERVER}/todos`}/>
              <Todo />
            </Col>
        </Row>
      </Container>
    </>
  </>;
}

export default App;
