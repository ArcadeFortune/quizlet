import React, { useState, useEffect } from "react";
import { SelectLanguage } from "./SelectLanguage";
import { SelectWords } from "./SelectWords";

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

const steps = ["Shipping address", "Payment details", "Review your order"];
function getStepContent(step) {
  switch (step) {
    case 0:
      return;
    case 1:
      return;
    case 2:
      return;
    default:
      throw new Error("Unknown step");
  }
}

export const MainContainer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [lang, setLang] = useState("");
  const [words, setWords] = useState("");
  const [ok, setOk] = useState(false);

  const handleLangChange = (event) => {
    setLang(event.target.value);
  };

  const handleWordsChange = (event) => {
    setWords(event.target.value);
  };

  useEffect(() => {
    if (lang !== "") {
      setOk(true);
    }
  }, [lang]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <CssBaseline />

      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center" sx={{ mb: 2 }}>
          Quizlet
        </Typography>
        <Divider />

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

        {activeStep === steps.length ? (
          // victory screen
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
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
                sx={{ mt: 3, ml: 1 }}
              >
                {ok ? "OK" : "OK"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Paper>
    </Container>
  );
};
