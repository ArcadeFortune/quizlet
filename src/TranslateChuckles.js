// translate jokes with the mymemory api
// https://api.mymemory.translated.net/get?q=Hello%20World!&langpair=en|it

const parseText = (text) => {
  // returns the same string but with '%20' instead of ' '
  return text.split(" ").join("%20");
};

const fetchTranslatorApi = async (text, lang) => {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${parseText(text)}&langpair=en|${lang}`
    );
    const data = await response.json();

    return data.responseData.translatedText;
  } catch (error) {
    console.error("Error fetching:", error);
  }
};

export const TranslateChuckles = async (jokes, lang) => {
  let translatedJokes = [];
  for (const joke of jokes) {
    translatedJokes.push(await fetchTranslatorApi(joke, lang));
  }

  return translatedJokes;
};
