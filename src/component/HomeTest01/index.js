
import React, { useState } from 'react';

function Tinhtoan() {
  const [count,setcount] = useState (5)
  const onClick = () => {
    setcount(count+1)}

  const [info, setname] = useState({ name : "Nagi", age : 16, generation : 5})
  const changename = () => {
    setname ({name : "Miku", age : 15, generation : 4})
  }

  const [user,setUser] = useState({
    name : 'kha',
    phone:'123456789',
  })
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={onClick}> Click to + </button>

      <button onClick = {() => 
        {
          if (count > 0)
          {
            setcount(count-1)
          } 
        }
      }> Click to - </button>

        <hr/>

      <div> Name : {info.name}</div>
      <div> Age : {info.age}</div>
      <div> Gen : {info.generation}th</div>
      <button onClick={changename}>Change Miku</button>

      <hr/>

      <div>{user.name}</div>
      <div>{user.phone}</div>
      <button onClick={() => {
        setUser({
            ...user,
            name: 'Tung'
        })
      }}>Doi ten</button>
    </div>
  );
}

export default Tinhtoan;
