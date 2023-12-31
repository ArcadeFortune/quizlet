// https://mui.com/material-ui/react-card/#system-MultiActionAreaCard.js

import * as React from "react";

import { AnswerQuestion } from "../AnswerQuestion";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const Task = ({ index, question, answer, words, onInputChange }) => {
  return (
    <Card sx={{ mb: "1%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          #{index + 1} {question}
        </Typography>
          <AnswerQuestion 
            text={answer} 
            words={words}
            onInputChange={(wordIndex, value) => onInputChange(index, wordIndex, value)} 
          />
      </CardContent>
    </Card>
  );
};

