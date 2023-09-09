function processWords(backup, modifiedWords, replacedCount, number) {
  backup++;
  modifiedWords = modifiedWords.map((word, index) => {
    // what is this?
    if (replacedCount < number && Math.random() < 0.5 && word !== "___") {
      replacedCount++;

      return "___";
    }

    return word;
  });
  return { backup, modifiedWords, replacedCount };
}

export const AnswerQuestion = ({ text, words }) => {
  // returns the text with a <span> around random words, the amount of words is specified by the words prop
  const parseText = (text, number) => {
    const words = text.split(" ");

    if (number > words.length) return text;

    let backup = 0;
    let replacedCount = 0;
    let modifiedWords = [...words];
    while (replacedCount < number || backup > 40) {
      ({ backup, modifiedWords, replacedCount } = processWords(
        backup,
        modifiedWords,
        replacedCount,
        number
      ));
    }

    return modifiedWords.join(" ");
  };

  return parseText(text, words);
};
