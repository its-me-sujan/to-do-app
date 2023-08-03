import React from "react";
import { Accordion, Alert, Form } from "react-bootstrap";

export default function ListTodo() {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Form.Group>
                <input
                    type="checkbox"
                />
                <>todoTitle</>
            </Form.Group>
          </Accordion.Header>
          <Accordion.Body>
            subtask
          </Accordion.Body>
        </Accordion.Item>
        <Alert variant="primary">No Todo Found...</Alert> 
      </Accordion>
    </>
  );
}
