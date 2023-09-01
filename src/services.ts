export const fetchRandomDog = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');

  if (!response.ok) {
    throw new Error('Failed to fetch coordinates');
  }

  const randomDogInfo = await response.json();

  const srcUrl = randomDogInfo.message;
  return { srcUrl };
};
