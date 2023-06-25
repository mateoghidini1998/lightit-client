import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      {totalPages > 1 && (
        <ul>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
              <button onClick={() => onPageChange(index + 1)}>{index + 1}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Pagination;
