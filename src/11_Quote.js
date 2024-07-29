import React, { useEffect, useState } from 'react'

const Quote = () => {
    const [data, setData] = useState(null);
    const [quote, setQuote] = useState(null);


    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then((response) => response.json())
            // .then((datafetch) => console.log(datafetch))
            .then((datafetch) => {
                setData(datafetch);
        
                const randomIndex = Math.floor(Math.random() * datafetch.length);
                setQuote(datafetch[randomIndex]);
            });
        
    }, []);
  return (
      <div>
          {
              data ? (
                  <div>
                      <h3>Quote : {quote.text}</h3>
                      </div>
              ) : (
                      <p>Loading...</p>
              )
          }

    </div>
  )
}

export default Quote