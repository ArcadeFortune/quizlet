import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";

export const TopBar = () => {
	const title = "Welcome to the (totally) fastest langauge learner!";
  
	const handleAbout = () => {
		alert("Made by ArcadeFortune - Alessio Lama");
	};
	
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography
          variant="h6"
          component="a"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
            fontWeight: 700,
          }}
          href="/"
        >
          {title}
        </Typography>

        <Divider />
        <Button
          color="inherit"
          onClick={handleAbout}
        >
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};
