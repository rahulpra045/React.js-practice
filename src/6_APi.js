import React, { useEffect, useState } from 'react'

const Apicall = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => setData(json))
        
    },[])
  return (
      <div>
          {
              data ? (
                  <div>
                      <h1>Title : {data.title}</h1>
                      <h2>Body: { data.body}</h2>
                      <h3>ID: { data.id}</h3>
                  </div>
              ) : (
                      <p>NO Data or Loading...</p>
              )
          }
    </div>
  )
}

export default Apicall