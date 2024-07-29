import React, { useState } from 'react'

const Togglebox = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handletoggle = () => {
        setIsClicked(!isClicked);
    }
  return (
      <div>
          <label>
              <input type='checkbox' value={isClicked} onChange={(handletoggle)} />
          </label>
          <p>{ isClicked ? "ON" : "OFF"}</p>
    </div>
  )
}

export default Togglebox