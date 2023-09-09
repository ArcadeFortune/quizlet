import Typography from "@mui/material/Typography";
import { SelectLanguage } from "./SelectLanguage";
import { SelectWords } from "./SelectWords";
import { SelectQuestions } from "./SelectQuestions";

export const Selection = ({ lang, handleLangChange, words, handleWordsChange, questions, handleQuestionsChange}) => {
  return (
    <>
      <Typography
        component="h1"
        variant="h5"
        align="left"
        sx={{ pt: 3, pb: 1 }}
      >
        Chose a language
      </Typography>

      <SelectLanguage lang={lang} handleChange={handleLangChange} />

      <Typography
        component="h1"
        variant="h5"
        align="left"
        sx={{ pt: 3, pb: 1 }}
      >
        Chose how many words will be blank
      </Typography>

      <SelectWords words={words} handleChange={handleWordsChange} />

      <Typography
        component="h1"
        variant="h5"
        align="left"
        sx={{ pt: 3, pb: 1 }}
      >
        Chose how many questions you want
      </Typography>

      <SelectQuestions
        questions={questions}
        handleChange={handleQuestionsChange}
      />
    </>
  );
};
