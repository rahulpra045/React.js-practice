import React, { useState } from 'react'

const Toggleradio = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handletoggle = () => {
        setIsClicked(!isClicked);
    }
  return (
      <div>
          <label>
              <input type='radio' checked={isClicked} onClick={(handletoggle)} readOnly/>
          </label>
          <p>{ isClicked ? "ON" : "OFF"}</p>
    </div>
  )
}

export default Toggleradio