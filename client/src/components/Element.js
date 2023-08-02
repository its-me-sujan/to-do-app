import React from 'react'

export default function Element() {
  const shoot = (a) => {
    alert(a);
  }
    return (
    <>
        <button onClick={()=>shoot('Goal')}>Take a shoot!</button>
    </>
  )
}
