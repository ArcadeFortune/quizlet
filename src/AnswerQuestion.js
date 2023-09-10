// chatGPT-4
import { Typography, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

export const AnswerQuestion = ({ text, words, onInputChange }) => {
  // console.log(text)
  const [userInputs, setUserInputs] = useState([]);
  const [displayedText, setDisplayedText] = useState([]);

  const handleInputChange = (event, index) => {
    const newInputs = [...userInputs];
    newInputs[index] = event.target.value;
    setUserInputs(newInputs);
    onInputChange(index, event.target.value);
  };

  useEffect(() => {
    const wordsArray = text.split(" ");

    if (words > wordsArray.length) {
      setDisplayedText(wordsArray);
      return;
    }

    let backup = 0;
    let replacedCount = 0;
    let modifiedWords = [...wordsArray];
    while (replacedCount < words && backup < 40) {
      for (let i = 0; i < modifiedWords.length; i++) {
        if (replacedCount < words && Math.random() < 0.2 && modifiedWords[i] !== "___") {
          replacedCount++;
          modifiedWords[i] = "___";
        }
      }
      backup++;
    }

    setDisplayedText(modifiedWords);
  }, [text, words]);

  return (
    <>
      {displayedText.map((word, index) => {
        if (word === "___") {
          return (
            <TextField 
              key={`textField-${index}`} 
              value={userInputs[index] || ""} 
              onChange={(e) => handleInputChange(e, index)} 
              id="standard-basic" 
              variant="standard" 
              size='small' 
              sx={{ width: '4em' }}
            />
          );
        }
        return <Typography key={`text-${index}`} display="inline">{word} </Typography>;
      })}
    </>
  );
};
