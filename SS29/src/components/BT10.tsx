import { useState } from 'react';
let BT10 = () => {
  
    let genders = ['Nam', 'Nữ', 'Gayy'];
    let [currentGender, setCurrentGender] = useState('Nam');

    let handleRandomGender = () => {
        let randomIndex = Math.floor(Math.random() * genders.length);
        setCurrentGender(genders[randomIndex]);
    };
    return ( 
        <div> 
            <br />
            <h1>Bt10</h1>
            <p>Giới tính hiện tại: {currentGender}</p>
            <button onClick={handleRandomGender}>Random gender</button>
        </div>
    );
};
export default BT10;