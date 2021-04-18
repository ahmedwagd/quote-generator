import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

const url = 'https://api.adviceslip.com/advice';
const App = () => {
  const [advice, setAdvice] = useState('');
  const fetchAdvice = async () => {
    try {
      const adviceUrl = await axios.get(url);
      const { advice } = adviceUrl.data.slip;
      setAdvice(advice);
    } catch (err) {
      console.log({ message: err.message })
    }
  }
  useEffect(() => {
    fetchAdvice();
  }, [])
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">
          {advice}
        </h1>
      </div>
    </div>
  );
}
export default App;