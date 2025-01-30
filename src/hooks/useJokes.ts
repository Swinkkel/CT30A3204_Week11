import { useState } from "react";
import { IJoke } from '../types/joke'

const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<IJoke[]>([]);

  const saveJoke = (joke: IJoke) => {
    setSavedJokes((prevJokes) =>
      prevJokes.some((j) => j.id === joke.id) ? prevJokes : [...prevJokes, joke]
    );
  };

  return { savedJokes, saveJoke };
};

export default useJokes;
