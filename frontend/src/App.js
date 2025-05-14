import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`/api/search?q=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        setMessage(data.result);
      })
      .catch(err => console.error("Error fetching search data:", err));
  };

  return (
    <div className="app-container">
      <h1 className="app-header">React + Spring Boot</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type your query here..."
          className="search-bar"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <p className="message">Message from backend: {message}</p>
    </div>
  );
}

export default App;
