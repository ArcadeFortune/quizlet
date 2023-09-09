// function which returns a list with a specified amount of chuck norris jokes
// using the chuck norris api
// https://api.chucknorris.io/jokes/random

const fetchChuckNorrisJoke = async () => {
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await response.json();

    return data.value;
  } catch (error) {
    console.error("Error fetching Chuck Norris joke:", error);
  }
};

export const Chuckles = async (questionsToAsk) => {
  // using SetQuestions instead of returning a list is to avoid using async, because react does not like that
  // i know it is not functional programming
  let jokes = [];

  for (let i = 0; i < questionsToAsk; i++) {
    jokes.push(await fetchChuckNorrisJoke());
  }

  return jokes;
};
