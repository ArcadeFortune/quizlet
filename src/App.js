import React, { useContext } from "react";
import { ContextMenu } from "./ContextMenu";
import { TopBar } from "./TopBar";
import context from "./Settings";
import { MainContainer } from "./MainContainer";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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


function App() {
  const { settings, setSettings } = useContext(context);
  return (
    <ContextMenu>
      <CssBaseline />
      <TopBar />
      <MainContainer />
    </ContextMenu>
  );
}

export default App;
