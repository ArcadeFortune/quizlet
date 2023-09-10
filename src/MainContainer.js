import React, { useState, useEffect } from "react";
import { Selection } from "./packers/Selection";
import { Task } from "./packers/Task";
import { Chuckles } from "./Chuckles";
import { TranslateChuckles } from "./TranslateChuckles";

import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Backdrop from "@mui/material/Backdrop";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const steps = ["Choose the settings", "Translate the english text", "???"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return;
    case 1:
      return;
    case 2:
      return;
    default:
      alert("Unknown step");
      window.location.reload();
  }
}

export const MainContainer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [lang, setLang] = useState("");
  const [words, setWords] = useState(1);
  const [questionsToAsk, setQuestionsToAsk] = useState(1);
  const [ok, setOk] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [open, setOpen] = useState();
  const [mistakes, setMistakes] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [filled, setFilled] = useState(false);

  const handleUserInput = (questionIndex, wordIndex, value) => {
    const updatedAnswers = [...userAnswers];
    if (!updatedAnswers[questionIndex]) {
      updatedAnswers[questionIndex] = [];
    }
    updatedAnswers[questionIndex][wordIndex] = value;
    setUserAnswers(updatedAnswers);
  };

  const checkAnswers = () => {
    // this function is bruoght to you by ChatGPT-4
    setFilled(true);
    const areAllAnswersEmpty = userAnswers.every(
      (answer) => !answer || answer.every((word) => !word)
    );
    if (areAllAnswersEmpty) {
      setFilled(false);
      setOpen(true);
      return; // frühzeitiger Ausstieg aus der Funktion
    }
    setCorrect(true);
    setOpen(true);

    for (let i = 0; i < answers.length; i++) {
      const actualWords = answers[i].split(" ");
      const userWords = userAnswers[i] || [];

      for (let j = 0; j < actualWords.length; j++) {
        if (
          userWords[j] &&
          userWords[j].replace(/[,. -]/g, "").toLowerCase() !==
            actualWords[j].replace(/[,. -]/g, "").toLowerCase()
        ) {
          setCorrect(false);
          setMistakes(mistakes + 1);
        }
      }
    }
  };

  const handleLangChange = (event) => {
    setLang(event.target.value);
  };

  const handleWordsChange = (event) => {
    setWords(event.target.value);
  };

  const handleQuestionsChange = (event) => {
    setQuestionsToAsk(event.target.value);
  };

  useEffect(() => {
    if (lang !== "") {
      setOk(true);
    }
  }, [lang]);

  const handleNext = async () => {
    if (activeStep === 0) {
      setOk(false);
      const fetchedQuestions = await Chuckles(questionsToAsk);
      setQuestions(fetchedQuestions);
      setAnswers(await TranslateChuckles(fetchedQuestions, lang));
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const everything = {
    lang,
    handleLangChange,
    words,
    handleWordsChange,
    questions: questionsToAsk,
    handleQuestionsChange,
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <CssBaseline />
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center" sx={{ mb: 2 }}>
          Quizlet
        </Typography>
        <Divider />

        <Typography component="h1" variant="subtitle1" align="center" sx={{ my: 1 }}>
          {steps[activeStep]}
        </Typography>

        {/* I do not like this way of codig with the steps */}
        {activeStep === 1 ? (
          <>
            {questions.map((question, index) => (
              <Task
                key={index}
                index={index}
                question={question}
                answer={answers[index]}
                words={words}
                onInputChange={handleUserInput}
              />
            ))}
            <Button onClick={checkAnswers}>Antworten überprüfen</Button>
          </>
        ) : (
          <>
            <Selection {...everything} />
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              <Button
                disabled={!ok} // copilot OP
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}>
                OK
              </Button>
            </Box>
          </>
        )}
        {open && (
          <Modal
            open={open}
            onClose={() => {
              if (correct) window.location.reload();
              setOpen(false);
              setMistakes(0);
              setCorrect(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                How did you do?
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} display="inline-flex">
                {correct
                  ? "You are correct, good job!"
                  : filled
                  ? "You are wrong, " + (mistakes ? `you made ${mistakes} mistake(s)` : "")
                  : "You have to fill all the blanks"}
              </Typography>
            </Box>
          </Modal>
        )}
      </Paper>
    </Container>
  );
};
