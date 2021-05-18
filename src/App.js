import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  var Waves = require('./components/Waves');
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  module.exports = React.createClass({
    render: function() {
      var bar = 'baz';
      return(
        <Waves foo={bar}/>
      );
    }
  });
  return (
    <main>
      <h1>Max Mohammadi</h1>
      <h2>Portfolio</h2>
    </main>
  );
}

export default App;
