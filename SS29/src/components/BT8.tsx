import React, { useState } from "react";

export default function BT8() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
  }
  return (
    <div>
      <br />
      <h1>BT8</h1>
      <b>
        Sau khi bấm lần {count}:
      </b>
      <br />
      <button onClick={handleClick}>Click {count} lần</button>
    </div>
  );
}
