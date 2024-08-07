//pagination is to show the only list items which are required to show per page
import React, { useState } from 'react'
import './styles/16_Pagination.css';

const Pagination = ({ items, itemsPerPage }) => {
    
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastIndex = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastIndex - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastIndex);

    // console.log(currentItems);
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++){
        pageNumber.push(i);
    }
  return (
      <div className='pagination-container'>
          <ul>
              {currentItems.map((item, index) => {
                  return <li key={index}>{item}</li>
              })}
          </ul>
          <ul className='pagination-list'>
          {pageNumber.map((number) => (
              <li key={number}>
                  <button
                      onClick={() => setCurrentPage(number)}
                      style={{ cursor: 'pointer' }}>
                      {number}
                      </button>
              </li>
          ))}
              </ul>
    </div>
  )
}

export default Pagination