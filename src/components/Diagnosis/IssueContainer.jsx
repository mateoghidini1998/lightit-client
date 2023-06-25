import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../../styles/Components/IssuesContainer.css'
import IssueCard from './IssueCard';

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

  return (
    <div className='issues_container'>
      {loadingMessage ? (
        <p>{loadingMessage}</p>
      ) : issues.length > 0 ? (
        issues.map((issue) => (
          <IssueCard key={issue.ID} issue={issue} />
        ))
      ) : (
        <p>No issues found.</p>
      )}
    </div>
  );
}

export default IssueContainer;
