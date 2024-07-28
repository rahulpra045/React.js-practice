import React from 'react'

const Listitem = () => {
    const items = ['item1','item2','item3','item4','item5','item6']
  return (
      <div>
          <ul>
            
              {items.map((item, index) => (
                  <li key={index}>{item}</li>

              ))}

          </ul>
    </div>
  )
}

export default Listitem