import React from 'react'

export default function Element() {
  const shoot = () => {
    alert('goal');
  }
    return (
    <>
        <button onClick={shoot}>Take a shoot!</button>
    </>
  )
}
