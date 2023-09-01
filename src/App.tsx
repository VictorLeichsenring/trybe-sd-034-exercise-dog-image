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
    const localStorageUrl = localStorage.getItem('imageUrl');
    if (localStorageUrl) {
      setImageUrl(localStorageUrl);
      setIsLoading(false);
    } else {
      fetchDog();
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('imageUrl', imageUrl);
      const dogBreed = imageUrl.split('/')[4];
      alert(dogBreed);
    }
  }, [imageUrl, isLoading]);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Gerador de Doguinhos</h1>
      <h2>O seu doguinho é:</h2>
      <img src={ imageUrl } alt="Doguinho aleatório" />
      <button onClick={ fetchDog }>Novo doguinho!</button>
    </div>
  );
}

export default App;
