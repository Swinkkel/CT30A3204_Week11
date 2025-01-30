import { useState } from "react";
import { IJoke } from '../types/joke'

export const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<IJoke[]>([]);

  const saveJoke = (joke: IJoke) => {
    setSavedJokes((prevJokes) =>
      prevJokes.some((j) => j.id === joke.id) ? prevJokes : [...prevJokes, joke]
    );

   };

   const deleteJoke = (id: number) => {
        setSavedJokes((preJokes) => preJokes.filter((joke) => joke,id !== id))
   }

  return { savedJokes, saveJoke, deleteJoke };
};
