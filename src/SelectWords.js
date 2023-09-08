// https://mui.com/material-ui/react-select/#system-SelectAutoWidth.js
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SelectWords = ({ words, handleChange }) => {
  return (
    <div>
      <FormControl sx={{ minWidth: 140 }}>
        <InputLabel>Words</InputLabel>
        <Select label="Words" value={words} onChange={handleChange} autoWidth>
          <MenuItem value={1}>
            One
          </MenuItem>          
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
