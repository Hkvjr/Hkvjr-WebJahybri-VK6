import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, apiKey) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError(''); // Nollaa virhetila ennen uutta pyyntöä
    try {
      const response = await axios.get(url, {
        headers: { 'X-Api-Key': apiKey },
      });

      if (response.data && response.data.length > 0) {
        setData(response.data[0].fact);
      } else {
        setError('No facts available');
      }
    } catch (error) {
      console.error("Error fetching the fact", error.response ? error.response.data : error.message);
      setError('Error fetching fact: ' + (error.response ? error.response.data : error.message));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, apiKey]);

  return { data, loading, error, fetchData };
};

export default useFetch;
