import React from 'react'

export default function BT1() {
    const handleClick = ():void =>{
        console.log("Clicked")
    };
  return (
    <>
    <h1>Bài 1</h1>
    <button onClick={handleClick} className='btn btn-primary'>Click me</button>
    </>
  )
}
