import React, { useState } from "react";
export default function BT5() {
    const [valueButton,setBtn]=useState<boolean>(true)
    const changeValue=()=>{
        setBtn( valueButton === true ? false : true )
        
    }
  return (
    <>
      <br />
      <h1>Bài 5</h1>
      <div>
        <p>Nếu giá trị là {String(valueButton)}</p>
        <button onClick={changeValue}>{valueButton=== true ? 'Hiện':'Ẩn'}</button>
      </div>
   
    </>
  );
}
