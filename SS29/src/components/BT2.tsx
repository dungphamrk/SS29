import React,{useState} from "react";
export default function BT2() {
  const [inputInfo,setInput]=useState("");
    const changeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
    }
  return (
    <div>
      <br />
      <h1>Bài 2</h1>
      <label htmlFor="Ex2">Dữ liệu người dùng nhập: {inputInfo}</label>
      <span></span>
      <br />
      <input type="text" className="Ex2" onChange={changeInput} />
    </div>
  );
}
