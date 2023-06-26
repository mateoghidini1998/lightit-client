import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../../styles/Components/IssuesContainer.css'
import IssueCard from './IssueCard';
import usePagination from '../../customHooks/usePagination';
import Pagination from '../UI/Pagination';

function IssueContainer() {
  const { diagnosis, isLoading } = useSelector((state) => state.diagnosis);
  const [issues, setIssues] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState('');

  useEffect(() => {
    if (isLoading) {
      setLoadingMessage('Loading...');
    } else {
      setLoadingMessage('');
      if (diagnosis) {
        setIssues(diagnosis.map((item) => [item.Issue, item.Specialisation]));
      }
    }
  }, [diagnosis, isLoading]);

  //Destructure UsePagination
  const { currentPage, currentItems, totalPages, handlePageChange } = usePagination(issues, 3);

  return (
    <div className='issues_container'>
      <div className="main-content">
        {loadingMessage ? (
          <h1 className='title loader'>{loadingMessage}</h1>
        ) : issues.length > 0 ? (
          currentItems.map((issue) => (
            <IssueCard key={issue.ID} issue={issue} />
          ))
        ) : (
          <p>No issues found.</p>
        )}
      </div>
      <div className='pagination_container'>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default IssueContainer;
