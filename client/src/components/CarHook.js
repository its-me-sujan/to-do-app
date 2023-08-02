import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

const CarHook = () => {
    const [userColor, setUserColor]= useState('white');
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red",
    });

    const updateColor = (color) => {
        setCar((previousState) => {
            return {...previousState, color:color};
        });
    }

  return (
    <>
        <h1>MY {car.brand}</h1>
        <p>
            It is a {car.model} from {car.year} and color is {car.color}.
        </p>
        <Form.Group className='mb-3' controlId='carHook.ControlInput1'>
            <Form.Label>Add your own color</Form.Label>
            <Form.Control
                type='text'
                placeholder='Place your color name'
                onChange={(e) => setUserColor(e.target.value)}
            />
        </Form.Group>
        <Button variant='danger' onClick={() => updateColor(userColor)}>
            {userColor}
        </Button>
    </>
  );
};

export default CarHook;