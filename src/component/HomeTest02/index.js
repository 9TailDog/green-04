import React, { useState } from 'react';
import Users from './Users'
  const HomeTest02 = () => {
    const[users, setUsers] = useState([{name:'', phone:''}])

    const onCreate = () => {
      setUsers([
        ...users,
          {   
            id: Math.random(),
            name:'Tung', 
            phone:'31122022'
          }
      ])
      console.log(users)
    }

    const onDelete = (id) => {
      const newData = users.filter((b) => {
        return b.id !== id
      })
      setUsers(newData)
    }

    return (
      <div className='App'>
        {users.map((user) => 
          {
              return (
                < Users key={user.id} data={user} onDelete={onDelete}/>
              )
          })}

        <button onClick={onCreate}> Add </button>
      
      </div>
    );
  }

export default HomeTest02;
