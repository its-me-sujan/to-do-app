import { Col,Container, Row } from "react-bootstrap";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./pages/Todo"
import ListTodo from "./components/ListTodo";
function App() {
  return <>
    <>
      <Container>
        <Row>
            <Col md={{span: 6, offset: 3}}>
              <Title name = "TODO App"/>
              <AddTodo label = "Add New Task" placeholder = "Eg: Do Homework" />
              <Todo />
              <ListTodo />
            </Col>
        </Row>

      </Container>
    </>
  </>;
}

export default App;
