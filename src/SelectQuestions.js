// https://mui.com/material-ui/react-select/#system-SelectAutoWidth.js
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SelectQuestions = ({ questions, handleChange }) => {
  return (
    <div>
      <FormControl sx={{ minWidth: 140 }}>
        <InputLabel>Question(s)</InputLabel>
        <Select label="Question(s)" value={questions} onChange={handleChange} autoWidth>
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={6}>Six</MenuItem>
          <MenuItem value={7}>Seven</MenuItem>
          <MenuItem value={8}>Eight</MenuItem>
          <MenuItem value={9}>Nine</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
