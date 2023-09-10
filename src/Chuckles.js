// function which returns a list with a specified amount of chuck norris jokes
// using the chuck norris api
// https://api.chucknorris.io/jokes/random
import profanity from "./settings/BadWords.json";

const fetchChuckNorrisJoke = async (profanity) => {
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await response.json();

    if (contanisBadWord(data.value, profanity)) {
      return fetchChuckNorrisJoke(profanity);
    }
    
    return data.value;
  } catch (error) {
    console.error("Error fetching Chuck Norris joke:", error);
  }
};

function contanisBadWord(string, list) {
  for (const word of list) {
    if (string.toLowerCase().includes(word.toLowerCase())) {
      return true
    }
  }
  
  return false; 
}

export const Chuckles = async (questionsToAsk) => {
  let jokes = [];

  for (let i = 0; i < questionsToAsk; i++) {
    jokes.push(await fetchChuckNorrisJoke(profanity));
  }

  return jokes;
};
