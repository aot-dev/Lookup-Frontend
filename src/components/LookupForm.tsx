import { useState } from 'react';

interface LookupFormProps {
  onSubmit: (query: string) => void;
}

const LookupForm = ({ onSubmit }: LookupFormProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter IP or Domain"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default LookupForm;
