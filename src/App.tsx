import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  const fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setImageUrl(data.message))
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchDog();
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Gerador de Dog</h1>
      <h2>O seu doguinho é:</h2>
      <img src={ imageUrl } alt="Doguinho aleatório" />
      <button onClick={ fetchDog }>Novo doguinho!</button>
    </div>
  );
}

export default App;
