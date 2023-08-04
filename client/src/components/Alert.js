import {Alert} from 'react-bootstrap';

export default function MsgAlert(props) {
    const {msg, type} = props;
  return (
    <>
        <Alert variant={type || "danger"}>{msg || "Something went wrong"}</Alert>
    </>
  );
}
