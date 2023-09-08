// https://mui.com/material-ui/react-select/#system-SelectAutoWidth.js
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
// copy table, paste into excel, save as CSV, convert to JSON :)
import everyLanguage from "./EveryLanguage.json";

export const SelectLanguage = ({ lang, handleChange }) => {
  return (
    <div>
      <FormControl sx={{ minWidth: 140 }}>
        <InputLabel>Language</InputLabel>
        <Select label="Language" value={lang} onChange={handleChange} autoWidth>
          <MenuItem value="">
            <em>Language</em>
          </MenuItem>
          {Object.keys(everyLanguage).map((key) => (
            <MenuItem key={key} value={everyLanguage[key]}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
