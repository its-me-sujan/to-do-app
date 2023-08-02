import {useState} from 'react'

export default function FavoriteColor() {
    const [color, setColor] = useState("red");
    return (
    <>
        <h1>My favorite color is {color}</h1>
        <button type='button' class="btn btn-primary" onClick={() => setColor('blue')}>Blue</button>
        <button type='button' class="btn btn-danger" onClick={() => setColor('red')}>Red</button>
    </>
  )
}
