import React, { useState } from 'react'

const Formreal = () => {
    const [name, setName] = useState('');
  return (
      <div>
          <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
          <p>User Input : {name}</p>
    </div>
  )
}

export default Formreal