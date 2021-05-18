import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Waves from './components/Waves.jsx'

function App() {

  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <main>
      <h1>Max Mohammadi</h1>
      <h2>Portfolio</h2>
      <Waves/>
    </main>
  );
}

export default App;
