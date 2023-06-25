import { useEffect, useState } from 'react';

function useFormattedDate(dateString) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}/${month}/${day}`;
    };

    setFormattedDate(formatDate(dateString));
  }, [dateString]);

  return formattedDate;
}

export default useFormattedDate;
