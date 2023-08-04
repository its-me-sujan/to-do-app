import { Form, InputGroup, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { DataContext } from "../contexts";

import MsgAlert from "./Alert";

function AddTodo(props) {
  const { post, loading, error } = useContext(DataContext);
  const { url, label, placeholder } = props;
  const [task, setTask] = useState({
    title: "",
  });

  const handleClick = async () => {
    const payload = task;
    await post(url, payload);
    setTask((prev) =>{
        return { ...prev, title:""};
    });
  };

  return (
    <>
      <InputGroup className="mb-3">
        {loading && <div>Loading...</div>}
        {error && <MsgAlert msg={error?.message} />}
        <InputGroup.Text>{label || "Label"}</InputGroup.Text>
        <Form.Control
          placeholder={placeholder || "Placeholder"}
          value={task?.title}
          onChange={(e) =>
            setTask((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
        <Button variant="outline-secondary" onClick={handleClick}>
          Submit
        </Button>
      </InputGroup>
    </>
  );
}

export default AddTodo;
