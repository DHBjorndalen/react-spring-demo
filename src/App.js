import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h1>React + Spring Boot</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
