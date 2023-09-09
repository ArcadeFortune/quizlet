import React, { useState, useEffect } from "react";
import { Selection } from "./packers/Selection";
import { Task } from "./packers/Task"
import { Chuckles } from "./Chuckles";
import { TranslateChuckles } from "./TranslateChuckles";

import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ReplayIcon from "@mui/icons-material/Replay";
import Menu from "@mui/material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

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
      alert("Unknown step")
      window.location.reload()
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
              <Task key={index} index={index} question={question} answer={answers[index ]} words={words}/>
            ))}
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
                {ok ? "OK" : "OK"}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};
