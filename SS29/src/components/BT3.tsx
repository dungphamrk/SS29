import React,{useState} from "react";
export default function BT3() {
  const [inputInfo,setInput]=useState("");
    const changeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
    }
  return (
    <div>
      <br />
      <h1>Bài 3</h1>
      <label htmlFor="Ex2">Thời gian: {inputInfo}</label>
      <span></span>
      <br />
      <input type="date" className="Ex2" onChange={changeInput} />
    </div>
  );
}
