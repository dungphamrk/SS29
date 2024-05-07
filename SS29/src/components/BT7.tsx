import React, { useState } from "react";

export default function BT7() {
  const [arrValue, updateArr] = useState([]);
  function addNumber() {
    const newInteger = Math.floor(Math.random() * 100) + 1;
    updateArr([...arrValue, newInteger] as never);
    console.log(arrValue);
  }
  return (
    <div>
      <br />
      <h1>BT7</h1>
      <b>
        Mảng số:[
        {arrValue.map((number, index) => (
          <span key={index}>{number},</span>
        ))}
        ]
      </b>
      <br />
      <button onClick={addNumber}>Add element</button>
    </div>
  );
}
