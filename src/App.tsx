import { useState } from 'react';
import axios from 'axios';
import './App.css';
import LookupForm from './components/LookupForm';
import LookupResult from './components/LookupResult';

const App = () => {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (query: string) => {
    setLoading(true);
    setError(null);
    setResult('');

    try {
      const response = await axios.post(`http://localhost:3001/api/lookup`,{
        query
      });
      setResult(response.data);
    } catch (error) {
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>IP/Domain Lookup</h1>
      <LookupForm onSubmit={fetchData} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <LookupResult data={result} />}
    </div>
  );
};

export default App;
