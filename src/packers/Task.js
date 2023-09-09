// https://mui.com/material-ui/react-card/#system-MultiActionAreaCard.js

import * as React from "react";

import { AnswerQuestion } from "../AnswerQuestion";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export const Task = ({ index, question, answer, words }) => {
  return (
    <Card sx={{mb: '1%'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          #{index + 1} {question}
        </Typography>
        <Typography variant="body2">
          <AnswerQuestion text={answer} words={words} />
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card >
  );
};

// <Typography variant="h6" gutterBottom key={index}>
//                 #{index + 1} {question}
//                 {/* <Typography variant="caption" gutterBottom key={`answer-${index}`}>
//                   {answers[index]}
//                 </Typography> */}
//               </Typography>
