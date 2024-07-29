import React, { useState } from 'react'

const Bgcolorchange = () => {
    const [backgroundColor, setbackgroundColor] = useState('red');

    const handleClick = () => {
        const newcolor = backgroundColor === 'red' ? 'blue' : 'red';
        setbackgroundColor(newcolor);
        
    }
  return (
      <div onClick={handleClick}
          style={{
          backgroundColor,
          width: '100%',
          height: '100%',
          cursor: 'pointer'
      }}>
          Click to change color
    </div>
  )
}

export default Bgcolorchange