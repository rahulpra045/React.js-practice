import React, { useState } from 'react'

const SearchFilter = ({ items }) => {
    
    const [searchItem, setSearchItem] = useState('');

    const filteredItems = items.filter((item) => 
        item.toLowerCase().includes(searchItem.toLowerCase())
    )
  return (
      <div>
          <input type='text' placeholder='Search...' onChange={(e) => setSearchItem(e.target.value)} />
          <ul>
              {filteredItems.map((item, index) => (
                  <li key={index}>
                      {item}
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default SearchFilter