import React, { useEffect, useState } from 'react'

const ResetTimer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);
        return ()=> clearInterval(interval);
    }, [seconds]);
  return (
      <div>
          <p>Timer : {seconds} second</p>
          <button onClick={()=>setSeconds(0)}>Reset</button>
    </div>
  )
}

export default ResetTimer